import { Vertical } from '.'
import { options, styles } from '../..'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Vertical, styles)
const ListTemplate = getListTemplate(Vertical, styles)

export default {
  title: 'Layout/Spacer/Vertical',
  component: Vertical,
  args: { isPlayground: true },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
