import { Dropdown, styles } from '.'

import { getTemplate } from '@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Dropdown, styles)

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
