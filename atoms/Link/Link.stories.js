import { Link, styles, options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Link, styles)
const ListTemplate = getListTemplate(Link, styles)

export default {
  title: 'Atoms/Link',
  component: Link,
  args: {
    children: 'Mouths Muil',
  },
  argTypes: {
    colors: getOptionsArgTypes(options.colors),
  },
}

export const Default = Template.bind({})
export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }
