import { Input, options, styles } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Input, styles)
const ListTemplate = getListTemplate(Input, styles)

export default {
  title: 'Atoms/Input',
  component: Input,
  args: {
    placeholder: 'Kingdom slowed',
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
  },
}

export const Default = Template.bind({})

export const Value = Template.bind({})
Value.args = { value: 'Others mainly cakehole Thorin moldy facial.' }

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }

export const Inline = Template.bind({})
Inline.args = { isInline: true }
