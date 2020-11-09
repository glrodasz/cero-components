import { ButtonIcon, options } from '.'
import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(ButtonIcon)
const ListTemplate = getListTemplate(ButtonIcon)

export default {
  title: 'Molecules/ButtonIcon',
  component: ButtonIcon,
  args: {
    children: 'Cowards Agreed',
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    icon: getOptionsArgTypes(options.icons),
    children: { control: 'text' },
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }
