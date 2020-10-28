import { Check, styles, options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Check, styles)
const ListTemplate = getListTemplate(Check, styles)

export default {
  title: 'Atoms/Check',
  component: Check,
  args: {},
  argTypes: {
    types: getOptionsArgTypes(options.types),
    onClick: { defaultValue: null },
  },
}

export const Default = Template.bind({})
export const List = ListTemplate.bind({})
List.args = { items: options.types.map((type) => ({ type })) }
