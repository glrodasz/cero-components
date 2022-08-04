import { Container, styles } from '.'

import { getTemplate } from '@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Container, styles)

export default {
  title: 'Layout/Container',
  component: Container,
  args: {
    isPlayground: true,
    children: `Farthings pulled strain? Half they'll greater land sordid Elessar`,
  },
  argTypes: {
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})

export const Centered = Template.bind({})
Centered.args = {
  isCentered: true,
}
