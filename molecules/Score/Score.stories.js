import { Score, styles } from '.'

import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Score, styles)

export default {
  title: 'Molecules/Score',
  component: Score,
  args: {},
}

export const Default = Template.bind({})
