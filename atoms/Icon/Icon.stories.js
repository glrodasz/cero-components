import { Icon, styles, options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Icon, styles)
const ListTemplate = getListTemplate(Icon, styles)

export default {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    name: 'arrowRight',
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    name: getOptionsArgTypes(options.names),
    background: getOptionsArgTypes(options.backgrounds),
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const Clickable = Template.bind({})
Clickable.args = { isClickable: true }

export const Names = ListTemplate.bind({})
Names.args = {
  items: options.names.map((name) => ({ name })),
}

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const Colors = ListTemplate.bind({})
Colors.args = {
  items: options.colors.map((color) => ({ color })),
}

export const Backgrounds = ListTemplate.bind({})
Backgrounds.args = {
  items: options.backgrounds.map((background) => ({ background })),
}
