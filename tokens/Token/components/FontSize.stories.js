import Token from '..'
import { choices } from '../..'

import { getTemplate, getListTemplate } from '../../../helpers/storybook'
import { getTokenItems } from '../helpers'

const Template = getTemplate(Token.FontSize)
const ListTemplate = getListTemplate(Token.FontSize)

export default {
  title: 'Tokens/FontSize',
  component: Token.FontSize,
  args: {
    children: 'Woodland lasted crowned holiday pirate brother wrath.',
  },
  argTypes: {
    value: { control: null },
    label: { control: null },
  },
}

const getItems = getTokenItems(choices.fontSize, 'fontSize')

export const Default = Template.bind({})
Default.args = {
  label: 'var(--font-size-base)',
  value: choices.fontSize.base,
}

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: getItems() }
