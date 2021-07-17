import { Bertical } from '.'
import { options, styles } from '../..'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../../../helpers/storybook'

const Template = getTemplate(Bertical, styles)
const ListTemplate = getListTemplate(Bertical, styles)

export default {
  title: 'Layout/Spacer/Bertical',
  component: Bertical,
  args: { isPlayground: true },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
