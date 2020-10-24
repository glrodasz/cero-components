import Heading, { options } from '.'
import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Heading)
const ListTemplate = getListTemplate(Heading)

export default {
  title: 'Atoms/Heading',
  component: Heading,
  args: {
    children: 'Consent doubt Tuckborough challenge destroying.',
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
