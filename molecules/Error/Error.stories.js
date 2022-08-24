import { Error, styles } from '.'

import { getTemplate } from '@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Error, styles)

export default {
  title: 'Molecules/Error',
  component: Error,
  args: {
    children:
      "Meets counts consumed 200 Meriadoc tombs rabble noble crash thread. Another kind Imladris. Dump each Kingdom mere other's by blame ugly sending bestow mist adventure.",
  },
}

export const Default = Template.bind({})
export const Title = Template.bind({})
Title.args = { title: 'Lindir glowers saw 111th utter.' }
