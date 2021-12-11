import { IconLabel, styles, options } from '.'

import { getTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = getTemplate(IconLabel, styles)

export default {
  title: 'Molecules/IconLabel',
  component: IconLabel,
  args: { icon: 'user', label: 'User' },
  argTypes: {
    icon: getOptionsArgTypes(options.icons),
  },
}

export const Default = Template.bind({})

export const Clickable = Template.bind({})
Clickable.args = { isClickable: true }

export const Active = Template.bind({})
Active.args = { isActive: true }

export const Horizontal = Template.bind({})
Horizontal.args = { direction: 'horizontal' }
