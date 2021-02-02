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
export const WithTotal = Template.bind({})
WithTotal.args = { total: 10 }
