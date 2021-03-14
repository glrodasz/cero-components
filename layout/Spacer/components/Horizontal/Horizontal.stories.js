import { Horizontal } from '.'
import { options, styles } from '../..'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../../helpers/storybook'

const Template = getTemplate(Horizontal, styles)
const ListTemplate = getListTemplate(Horizontal, styles)

export default {
  title: 'Layout/Spacer/Horizontal',
  component: Horizontal,
  args: { isPlayground: true },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
