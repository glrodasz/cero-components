import Spacer, { options } from '..'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../helpers/storybook'

const Template = getTemplate(Spacer.Vertical)
const ListTemplate = getListTemplate(Spacer.Vertical)

export default {
  title: 'Layout/Spacer/Vertical',
  component: Spacer.Vertical,
  args: {
    isVisible: true,
    height: 100,
    maxHeight: 100,
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
