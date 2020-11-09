import Token from '..'
import { choices } from '../..'

import { getTemplate, getListTemplate } from '../../../helpers/storybook'
import { getTokenItems } from '../helpers'

const Template = getTemplate(Token.Spacing)
const ListTemplate = getListTemplate(Token.Spacing)

export default {
  title: 'Tokens/Spacing',
  component: Token.Spacing,
  argTypes: {
    value: { control: null },
    label: { control: null },
  },
  parameters: { __sb: { fd: 'row' } },
}

const getItems = getTokenItems(choices.spacing, 'spacing')

export const Default = Template.bind({})
Default.args = {
  label: 'var(--spacing-none)',
  value: choices.spacing.none,
}

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: getItems() }
