import { Spacer, options, styles } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Spacer, styles)
const ListTemplate = getListTemplate(Spacer, styles)

export default {
  title: 'Layout/Spacer/Default',
  component: Spacer,
  args: { isPlayground: true },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
