import AddButton, { options } from '.'
import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(AddButton)
const ListTemplate = getListTemplate(AddButton)

export default {
  title: 'Molecules/AddButton',
  component: AddButton,
  args: {
    children: "Caves they've pick stealth Dwarf?",
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    icon: getOptionsArgTypes(options.icons),
    onAdd: { defaultValue: null, action: 'added' },
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }
