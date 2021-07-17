import { LoadingError } from '.'

import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(LoadingError)

export default {
  title: 'Molecules/LoadingError',
  component: LoadingError,
  args: {
    children:
      "Exile ruins brook Angmar inn wars retaken. Swiftly attacks Grma merely! Opinion Eorlingas inquisitive windlance? You are full of surprises, Master Baggins. Houses warning garden noble innocent silver charm numerous thirsty came Treebeard's warm.",
  },
}

export const Default = Template.bind({})

export const Loading = Template.bind({})
Loading.args = { isLoading: true }

export const Error = Template.bind({})
Error.args = {
  errorMessage: 'ext Grimbold sneak-thief cheekbones myth overfond task',
}
