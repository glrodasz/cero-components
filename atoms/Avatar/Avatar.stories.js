import Avatar, { options } from '.'

import { getTemplate, getListTemplate } from '../../helpers/storybookTemplates'

const Template = getTemplate(Avatar)
const ListTemplate = getListTemplate(Avatar)

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    src: 'https://picsum.photos/id/1011/200/200',
  },
  argTypes: {
    size: {
      control: { type: 'select', options: options.sizes },
    },
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
