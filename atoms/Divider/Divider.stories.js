import { Divider, styles } from '.'

import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Divider, styles)

export default {
  title: 'Atoms/Divider',
  component: Divider,
  args: {},
  argTypes: {},
}

export const Default = Template.bind({})
