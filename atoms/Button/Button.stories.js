import Button, { options } from '.'
import { getTemplate, getListTemplate } from '../../helpers/storybookTemplates'

const Template = getTemplate(Button)
const ListTemplate = getListTemplate(Button)

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'You Shall Not Pass!',
  },
  argTypes: {
    type: {
      control: { type: 'select', options: options.types },
    },
    onClick: { defaultValue: null, action: 'You Shall Not Pass!' },
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }

export const Inline = Template.bind({})
Inline.args = {
  isInline: true,
}
