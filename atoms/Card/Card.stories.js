import Card, { options } from '.'
import { getTemplate, getListTemplate } from '../../helpers/storybookTemplates'

const Template = getTemplate(Card)
const ListTemplate = getListTemplate(Card)

export default {
  title: 'Atoms/Card',
  component: Card,
  args: {
    children:
      'Lacerations coaster sort comings windlance happily EIf-witch handful unbefitting? Decide rising startled Aragorn invitations midnight deserves fortunes innards. You cannot hide. I see you. There is no life in the void. Only death. Mirror Emyn dreamed!',
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
