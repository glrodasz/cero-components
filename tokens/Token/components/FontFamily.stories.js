import Token from '..'
import { choices } from '../..'

import { getTemplate, getListTemplate } from '@glrodasz/storybook-tools-helpers'
import { getTokenItems } from '../helpers'

const Template = getTemplate(Token.FontFamily)
const ListTemplate = getListTemplate(Token.FontFamily)

export default {
  title: 'Tokens/FontFamily',
  component: Token.FontFamily,
  args: {
    children:
      "Depend noticed bones Edge disturbing flesh heard cream. Morninged facial judgment Hobbit fortress. Camp flatten buy dagger Sit. Leagues sweeter 1400 mean friend unlost Déagol trade stuffing? Smithy's jiffy merely treacherous cozy interesting ask seat Thror's.",
  },
  argTypes: {
    value: { control: null },
    label: { control: null },
  },
}

const getItems = getTokenItems(choices.fontFamily, 'fontFamily')

export const Default = Template.bind({})
Default.args = {
  label: 'var(--font-family-sans)',
  value: choices.fontFamily.sans,
}

export const Types = ListTemplate.bind({})
Types.args = { items: getItems() }
