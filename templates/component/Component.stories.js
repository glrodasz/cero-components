import { Component, styles, options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Component, styles)
const ListTemplate = getListTemplate(Component, styles)

export default {
  title: 'Atomic/Component',
  component: Component,
  args: {},
  argTypes: {
    types: getOptionsArgTypes(options.types),
  },
}

export const Default = Template.bind({})
export const List = ListTemplate.bind({})
List.args = { items: options.types.map((type) => ({ type })) }
