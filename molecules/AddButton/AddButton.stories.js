import { AddButton, options, styles } from '.'
import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(AddButton, styles)
const ListTemplate = getListTemplate(AddButton, styles)

export default {
  title: 'Molecules/AddButton',
  component: AddButton,
  args: {
    children: "Caves they've pick stealth Dwarf?",
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    icon: getOptionsArgTypes(options.icons),
    onAdd: { defaultValue: null },
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }

export const EditMode = Template.bind({})
EditMode.args = {
  defaultValue: 'Fixed caught squash wax Silvan sweet-taking keeps.',
  defaultEditMode: true,
}

export const HelpText = Template.bind({})
HelpText.args = {
  defaultValue: "Understand bravely halfling's rank balls.",
  defaultEditMode: true,
  focusHelpText: 'Fly, you fools!',
  blurHelpText: "Morgul-rats cripples you'll?",
}
