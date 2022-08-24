import { Link, styles, options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Link, styles)
const ListTemplate = getListTemplate(Link, styles)

export default {
  title: 'Atoms/Link',
  component: Link,
  args: {
    children: 'Mouths Muil',
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
