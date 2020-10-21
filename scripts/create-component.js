/* eslint-disable no-undef */
const fs = require('fs').promises
const path = require('path')
const enquirer = require('enquirer')
const toPascalCase = require('../utils/toPascalCase')
const toKebabCase = require('../utils/toKebabCase')
const toCapitalize = require('../utils/toCapitalize')

const ATOMIC_DESIGN_TYPES = {
  atom: 'atoms',
  molecule: 'molecules',
  layout: 'layout',
}
const COMPONENT_TEMPLATE_PATH = 'templates/component'

function createComponentFolder(componentPath) {
  return fs.mkdir(componentPath, { recursive: true })
}

function readComponentFile(componentTemplate) {
  return fs.readFile(
    path.join(__dirname, `../${COMPONENT_TEMPLATE_PATH}/${componentTemplate}`),
    'utf8'
  )
}

function replaceComponentFile(
  componentIsStory,
  componentFile,
  componentName,
  mappedType
) {
  if (!componentIsStory) {
    return componentFile
      .replace(/component/g, toKebabCase(componentName))
      .replace(/Component/g, componentName)
  } else {
    return componentFile
      .replace(/Component/g, componentName)
      .replace(/atomic/g, mappedType)
      .replace(/Atomic/g, toCapitalize(mappedType))
  }
}

function createComponentFile(componentPath, replacedComponentFile) {
  return fs.writeFile(componentPath, replacedComponentFile, 'utf8')
}

async function createComponent(componentTemplates, type, componentName) {
  const mappedType = ATOMIC_DESIGN_TYPES[type]
  const atomicComponentPath = path.join(
    __dirname,
    `../${mappedType}/${componentName}`
  )
  const storiesComponentPath = path.join(__dirname, `../stories/${mappedType}`)

  try {
    await createComponentFolder(atomicComponentPath)
    await createComponentFolder(storiesComponentPath)
    console.log('🔧 component folder created!')

    for (const componentTemplate of componentTemplates) {
      const componentTemplateRenamed = componentTemplate.replace(
        /Component/g,
        toPascalCase(componentName)
      )
      const componentIsStory = componentTemplate.search('stories') !== -1

      const componentFile = await readComponentFile(componentTemplate)
      const replacedComponentFile = await replaceComponentFile(
        componentIsStory,
        componentFile,
        componentName,
        mappedType
      )
      await createComponentFile(
        path.join(
          componentIsStory ? storiesComponentPath : atomicComponentPath,
          componentTemplateRenamed
        ),
        replacedComponentFile
      )
      console.log(`🔧 component file ${componentTemplateRenamed} created!`)
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

async function getPromptParams() {
  let { type } = await enquirer.prompt({
    type: 'select',
    name: 'type',
    message: 'What kind of component would you like to create?',
    choices: ['atom', 'molecule', 'layout'],
    initial: 'atom',
  })

  let { componentName } = await enquirer.prompt({
    type: 'input',
    name: 'componentName',
    message: 'What is the name of the new component?',
    validate(input) {
      if (!this.skipped && input.trim().length === 0 && input.trim() !== ',') {
        return 'Please, tell us what is the name of the new component. Try again!'
      }
      return true
    },
  })

  try {
    const componentTemplates = await fs.readdir(
      path.join(__dirname, `../${COMPONENT_TEMPLATE_PATH}`)
    )

    if (componentTemplates.length !== 0) {
      createComponent(componentTemplates, type, toPascalCase(componentName))
    } else {
      throw new Error(
        `There are not template files to create the component: ${toPascalCase(
          componentName
        )}`
      )
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

getPromptParams()
