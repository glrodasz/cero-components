import Spacer, { options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Spacer)
const ListTemplate = getListTemplate(Spacer)

export default {
  title: 'Layout/Spacer/Default',
  component: Spacer,
  args: {
    __sb: { fd: 'row' },
    isVisible: true,
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
