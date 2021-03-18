import { Error, styles, options } from '.'

import { getTemplate, getOptionsArgTypes } from '../../helpers/storybook'

const Template = getTemplate(Error, styles)

export default {
  title: 'Molecules/Error',
  component: Error,
  args: {
    children:
      "Meets counts consumed 200 Meriadoc tombs rabble noble crash thread. Another kind Imladris. Dump each Kingdom mere other's by blame ugly sending bestow mist adventure.",
  },
  argTypes: {
    types: getOptionsArgTypes(options.types),
  },
}

export const Default = Template.bind({})
export const Title = Template.bind({})
Title.args = { title: 'Lindir glowers saw 111th utter.' }
