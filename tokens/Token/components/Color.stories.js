import Token from '..'

import { choices, decisions } from '../..'

import { getTemplate, getListTemplate } from '../@glrodasz/storybook-tools-helpers'
import { getTokenItems } from '../helpers'

const Template = getTemplate(Token.Color)
const ListTemplate = getListTemplate(Token.Color)

export default {
  title: 'Tokens/Color',
  component: Token.Color,
  argTypes: {
    value: { control: null },
    label: { control: null },
  },
  parameters: { __sb: { mh: 300 } },
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
Base.args = { items: getItems('base') }
Base.parameters = {
  __sb: { fd: 'row', mh: 300 },
}

export const Brand = ListTemplate.bind({})
Brand.args = { items: getItems('brand') }
Brand.parameters = {
  __sb: { mh: 450 },
}

export const Decisions = ListTemplate.bind({})
Decisions.args = {
  items: getDecisionItems(),
}
Decisions.parameters = {
  __sb: { mh: 600 },
}

export const Backgrounds = ListTemplate.bind({})
Backgrounds.args = {
  items: getBackgroundItems(),
}
Backgrounds.parameters = {
  __sb: { fd: 'row' },
}

export const Rose = ListTemplate.bind({})
Rose.args = { items: getItems('rose') }

export const Pink = ListTemplate.bind({})
Pink.args = { items: getItems('pink') }

export const Fuchsia = ListTemplate.bind({})
Fuchsia.args = { items: getItems('fuchsia') }

export const Purple = ListTemplate.bind({})
Purple.args = { items: getItems('purple') }

export const Violet = ListTemplate.bind({})
Violet.args = { items: getItems('violet') }

export const Indigo = ListTemplate.bind({})
Indigo.args = { items: getItems('indigo') }

export const Blue = ListTemplate.bind({})
Blue.args = { items: getItems('blue') }

export const Sky = ListTemplate.bind({})
Sky.args = { items: getItems('sky') }

export const Cyan = ListTemplate.bind({})
Cyan.args = { items: getItems('cyan') }

export const Teal = ListTemplate.bind({})
Teal.args = { items: getItems('teal') }

export const Emerald = ListTemplate.bind({})
Emerald.args = { items: getItems('emerald') }

export const Green = ListTemplate.bind({})
Green.args = { items: getItems('green') }

export const Lime = ListTemplate.bind({})
Lime.args = { items: getItems('lime') }

export const Yellow = ListTemplate.bind({})
Yellow.args = { items: getItems('yellow') }

export const Amber = ListTemplate.bind({})
Amber.args = { items: getItems('amber') }

export const Orange = ListTemplate.bind({})
Orange.args = { items: getItems('orange') }

export const Red = ListTemplate.bind({})
Red.args = { items: getItems('red') }

export const WarmGray = ListTemplate.bind({})
WarmGray.args = { items: getItems('warmGray') }

export const TrueGray = ListTemplate.bind({})
TrueGray.args = { items: getItems('trueGray') }

export const Gray = ListTemplate.bind({})
Gray.args = { items: getItems('gray') }

export const CoolGray = ListTemplate.bind({})
CoolGray.args = { items: getItems('coolGray') }

export const BlueGray = ListTemplate.bind({})
BlueGray.args = { items: getItems('blueGray') }
