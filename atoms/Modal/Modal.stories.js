import { Modal, styles, options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Modal, styles)
const ListTemplate = getListTemplate(Modal, styles)

// FIXME: Make onClose an storybook action
export default {
  title: 'Atoms/Modal',
  component: Modal,
  args: {
    isPlayground: true,
    onClose: null,
    children:
      "Successful boar world's somebody herbs helpful spiders Samwise Gamgee helps unlost circles guard? Investment Thofin folly? Troublemaker minutes moldy Rivendell eve late traveling around crescent fault never naught",
  },
  argTypes: {
    type: getOptionsArgTypes(options.types),
    onClose: { action: 'clicked' },
  },
  parameters: { __sb: { fd: 'row' } },
}

export const Default = Template.bind({})

export const Closable = Template.bind({})
Closable.args = { onClose: () => {} }

export const SecondaryAction = Template.bind({})
SecondaryAction.args = {
  onClose: () => {},
  secondaryAction: {
    icon: 'checkCircle',
    handler: () => {},
  },
}

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }
