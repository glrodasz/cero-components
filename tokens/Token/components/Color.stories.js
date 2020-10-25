import Token from '..'
import toKebabCase from '../../../utils/toKebabCase'
import { choices, decisions } from '../..'

import { getTemplate, getListTemplate } from '../../../helpers/storybook'

const Template = getTemplate(Token.Color)
const ListTemplate = getListTemplate(Token.Color)

export default {
  title: 'Tokens/Colors',
  component: Token.Color,
  args: {
    __sb: { mh: 250 },
  },
  argTypes: {
    value: { control: null },
    label: { control: null },
  },
}

const getTokenItems = (tokens, tokenKey) => (group) => {
  if (group) {
    return Object.keys(tokens[group]).map((key) => ({
      label: `var(--${tokenKey}-${group}-${toKebabCase(key)})`,
      value: tokens[group][key],
    }))
  }

  return Object.keys(tokens).map((key) => ({
    label: `var(--${tokenKey}-${toKebabCase(key)})`,
    value: tokens[key],
  }))
}

const getColors = getTokenItems(choices.color, 'color')
const getDecisiones = getTokenItems(decisions.color, 'color')
const getBackgrounds = getTokenItems(
  decisions.backgroundColor,
  'background-color'
)

export const Default = Template.bind({})
Default.args = {
  label: 'var(--color-primary)',
  value: decisions.color.primary,
}

export const Base = ListTemplate.bind({})
Base.args = { __sb: { fd: 'row' }, items: getColors('base') }

export const Brand = ListTemplate.bind({})
Brand.args = { __sb: { mh: 400 }, items: getColors('brand') }

export const Decisions = ListTemplate.bind({})
Decisions.args = {
  __sb: { mh: 300 },
  items: getDecisiones(),
}

export const Backgrounds = ListTemplate.bind({})
Backgrounds.args = {
  __sb: { mh: 400 },
  items: getBackgrounds(),
}

export const Gray = ListTemplate.bind({})
Gray.args = { items: getColors('gray') }

export const Red = ListTemplate.bind({})
Red.args = { items: getColors('red') }

export const Orange = ListTemplate.bind({})
Orange.args = { items: getColors('orange') }

export const Yellow = ListTemplate.bind({})
Yellow.args = { items: getColors('yellow') }

export const Green = ListTemplate.bind({})
Green.args = { items: getColors('green') }

export const Teal = ListTemplate.bind({})
Teal.args = { items: getColors('teal') }

export const Blue = ListTemplate.bind({})
Blue.args = { items: getColors('blue') }

export const Indigo = ListTemplate.bind({})
Indigo.args = { items: getColors('indigo') }

export const Purple = ListTemplate.bind({})
Purple.args = { items: getColors('purple') }

export const Pink = ListTemplate.bind({})
Pink.args = { items: getColors('pink') }
