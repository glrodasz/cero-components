import { Score, styles } from '.'

import { getTemplate } from '@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Score, styles)

export default {
  title: 'Molecules/Score',
  component: Score,
  args: {},
}

export const Default = Template.bind({})
