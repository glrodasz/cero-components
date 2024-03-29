import { Divider, styles } from '.'

import { getTemplate } from '@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Divider, styles)

export default {
  title: 'Atoms/Divider',
  component: Divider,
}

export const Default = Template.bind({})
