import Spacer, { options } from '..'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Spacer.Horizontal)
const ListTemplate = getListTemplate(Spacer.Horizontal)

export default {
  title: 'Layout/Spacer/Horizontal',
  component: Spacer.Horizontal,
  args: {
    isVisible: true,
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
