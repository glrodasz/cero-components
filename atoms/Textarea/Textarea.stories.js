import { Textarea, styles } from '.'

import { getTemplate } from '@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Textarea, styles)

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  args: {
    placeholder:
      'Country speed seat newfound ah stained Gundabad stinking runt.',
  },
}

export const Default = Template.bind({})
