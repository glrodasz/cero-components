import { Heading, styles, options } from '.'
import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Heading, styles)
const ListTemplate = getListTemplate(Heading, styles)

export default {
  title: 'Atoms/Heading',
  component: Heading,
  args: {
    children: 'Consent doubt Tuckborough challenge destroying.',
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    weight: getOptionsArgTypes(options.weights),
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})

export const Inline = Template.bind({})
Inline.args = {
  isInline: true,
}

export const Centered = Template.bind({})
Centered.args = {
  isCentered: true,
  children:
    'Lose consequence night studies Wolves should wizards destruction burglar? All right, then. Keep your secrets.',
}

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }

export const Weights = ListTemplate.bind({})
Weights.args = { items: options.weights.map((weight) => ({ weight })) }
