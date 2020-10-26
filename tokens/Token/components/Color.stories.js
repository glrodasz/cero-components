import Token from '..'

import { choices, decisions } from '../..'

import { getTemplate, getListTemplate } from '../../../helpers/storybook'
import { getTokenItems } from '../helpers'

const Template = getTemplate(Token.Color)
const ListTemplate = getListTemplate(Token.Color)

export default {
  title: 'Tokens/Color',
  component: Token.Color,
  args: {
    __sb: { mh: 250 },
  },
  argTypes: {
    value: { control: null },
    label: { control: null },
  },
}

const getItems = getTokenItems(choices.color, 'color')
const getDecisionItems = getTokenItems(decisions.color, 'color')
const getBackgroundItems = getTokenItems(
  decisions.backgroundColor,
  'background-color'
)

export const Default = Template.bind({})
Default.args = {
  label: 'var(--color-primary)',
  value: decisions.color.primary,
}

export const Base = ListTemplate.bind({})
Base.args = { __sb: { fd: 'row' }, items: getItems('base') }

export const Brand = ListTemplate.bind({})
Brand.args = { __sb: { mh: 400 }, items: getItems('brand') }

export const Decisions = ListTemplate.bind({})
Decisions.args = {
  __sb: { mh: 300 },
  items: getDecisionItems(),
}

export const Backgrounds = ListTemplate.bind({})
Backgrounds.args = {
  __sb: { mh: 400 },
  items: getBackgroundItems(),
}

export const Gray = ListTemplate.bind({})
Gray.args = { items: getItems('gray') }

export const Red = ListTemplate.bind({})
Red.args = { items: getItems('red') }

export const Orange = ListTemplate.bind({})
Orange.args = { items: getItems('orange') }

export const Yellow = ListTemplate.bind({})
Yellow.args = { items: getItems('yellow') }

export const Green = ListTemplate.bind({})
Green.args = { items: getItems('green') }

export const Teal = ListTemplate.bind({})
Teal.args = { items: getItems('teal') }

export const Blue = ListTemplate.bind({})
Blue.args = { items: getItems('blue') }

export const Indigo = ListTemplate.bind({})
Indigo.args = { items: getItems('indigo') }

export const Purple = ListTemplate.bind({})
Purple.args = { items: getItems('purple') }

export const Pink = ListTemplate.bind({})
Pink.args = { items: getItems('pink') }
