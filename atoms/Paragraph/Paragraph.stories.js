import Paragraph, { options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Paragraph)
const ListTemplate = getListTemplate(Paragraph)

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  args: {
    children:
      'Swords are no more use here. Esquire days mountain Fangorn champion brace waiting laboring preparing! Canopy plunder deceit cakehole strange Udùn piled fighters potent?',
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    weight: getOptionsArgTypes(options.weights),
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const Weights = ListTemplate.bind({})
Weights.args = { items: options.weights.map((weight) => ({ weight })) }
