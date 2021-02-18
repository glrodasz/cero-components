import { TaskCounter, styles, options } from '.'

import { getTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = getTemplate(TaskCounter, styles)

export default {
  title: 'Molecules/TaskCounter',
  component: TaskCounter,
  args: {
    children: 'Em Sméagol body.',
    current: 2,
  },
  argTypes: {
    types: getOptionsArgTypes(options.types),
  },
}

export const Default = Template.bind({})
export const Total = Template.bind({})
Total.args = { total: 10 }

export const Toggleable = Template.bind({})
Toggleable.args = { isToggleable: true, total: 10 }
