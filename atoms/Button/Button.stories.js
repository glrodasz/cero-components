import { Button, options, styles } from '.'
import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Button, styles)
const ListTemplate = getListTemplate(Button, styles)

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'You Shall Not Pass!',
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    children: { control: 'text' },
    isMuted: { description: 'It requires `type` to be "primary"' },
  },
}

export const Default = Template.bind({})

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }

export const Inline = Template.bind({})
Inline.args = { isInline: true }

export const Muted = Template.bind({})
Muted.args = { type: 'primary', isMuted: true }

export const AddonPrepend = Template.bind({})
AddonPrepend.args = {
  addons: {
    prepend: 'Dare Erebor forgive most.',
  },
}

export const AddonAppend = Template.bind({})
AddonAppend.args = {
  addons: {
    append: 'But ill-tempered Thengel.',
  },
}

