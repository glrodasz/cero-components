import Dropdown from '.'

import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Dropdown)

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  args: {
    options: [
      {
        text: '8:00 AM',
        value: 800,
      },
      {
        text: '1:00 PM',
        value: 1300,
      },
    ],
  },
  argTypes: {
    onChange: { defaultValue: null, action: 'changed' },
    options: {
      description: '**array of shaped objects:**',
      table: {
        type: {
          summary: 'object',
          detail: "{ text: 'string', value: 'string|number'}",
        },
      },
    },
  },
}

export const Default = Template.bind({})

export const Value = Template.bind({})
Value.args = { value: 1300 }

export const Inline = Template.bind({})
Inline.args = { isInline: true }
