import { Horizontal } from '.'
import { options, styles } from '../..'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Horizontal, styles)
const ListTemplate = getListTemplate(Horizontal, styles)

export default {
  title: 'Layout/Spacer/Horizontal',
  component: Horizontal,
  args: {
    height: 100,
    maxHeight: 100,
    isPlayground: true,
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
    height: { control: 'number' },
    maxHeight: { control: 'number' },
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
