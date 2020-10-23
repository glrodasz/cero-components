import Heading, { options } from '.'
import { getTemplate, getListTemplate } from '../../helpers/storybookTemplates'

const Template = getTemplate(Heading)
const ListTemplate = getListTemplate(Heading)

export default {
  title: 'Atoms/Heading',
  component: Heading,
  args: {
    children: 'Consent doubt Tuckborough challenge destroying.',
  },
  argTypes: {
    color: {
      control: { type: 'select', options: options.colors },
    },
    size: {
      control: { type: 'select', options: options.sizes },
    },
  },
}

export const Default = Template.bind({})

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
