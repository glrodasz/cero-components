import Token from '..'
import { choices } from '../..'

import { getTemplate, getListTemplate } from '../../../helpers/storybook'
import { getTokenItems } from '../helpers'

const Template = getTemplate(Token.FontWeight)
const ListTemplate = getListTemplate(Token.FontWeight)

export default {
  title: 'Tokens/FontWeight',
  component: Token.FontWeight,
  args: {
    children: 'Cheap doors deny rune Mithrandir spawning brown dishes?',
  },
  argTypes: {
    value: { control: null },
    label: { control: null },
  },
}

const getItems = getTokenItems(choices.fontWeight, 'fontWeight')

export const Default = Template.bind({})
Default.args = {
  label: 'var(--font-weight-normal)',
  value: choices.fontWeight.normal,
}

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: getItems() }
