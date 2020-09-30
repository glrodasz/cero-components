/* eslint-disable no-undef */
const fs = require('fs').promises
const enquirer = require('enquirer')

const ATOMIC_DESIGN_TYPES = {
  atom: 'atoms',
  molecule: 'molecules',
  layout: 'layout',
}

function readComponentFile() {
  return fs.readFile('./templates/component/Component.js', 'utf8')
}

function replaceComponentFile(componentFile, componentName) {
  return componentFile.replace(/Component/g, componentName)
}

function createComponentFolder(componentPath) {
  return fs.mkdir(componentPath, { recursive: true })
}

function createComponentFile(
  componentPath,
  componentName,
  replacedComponentFile
) {
  return fs.writeFile(
    `${componentPath}/${componentName}.js`,
    replacedComponentFile,
    'utf8'
  )
}

async function createComponent(type, componentName) {
  const mappedType = ATOMIC_DESIGN_TYPES[type]
  const componentPath = `./${mappedType}/${componentName}`

  try {
    const componentFile = await readComponentFile()
    const replacedComponentFile = await replaceComponentFile(
      componentFile,
      componentName
    )
    await createComponentFolder(componentPath)
    console.log('🔧 component folder created!')

    await createComponentFile(
      componentPath,
      componentName,
      replacedComponentFile
    )
    console.log('🔧 component file created!')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

/**
 * Function to validate Component Name and capitaliz it if necessary
 * @param {str} str
 */
// TODO: Move to utils/pascalCase.js
function stringCheckAndCapitalize(str) {
  const REG_EXP = /[A-Z]/

  if (!REG_EXP.test(str)) {
    return str
      .replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      )
      .replace(/ /g, '')
  } else {
    return str
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

  createComponent(type, stringCheckAndCapitalize(componentName))
}

getPromptParams()
