import { Loading, styles } from '.'

import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Loading, styles)

export default {
  title: 'Atoms/Loading',
  component: Loading,
  args: {
    isPlayground: true,
    children:
      "Adventures washed awfully web poured pirate Iáve extend shared? Glows visit bitter fire-breather 400 triumphant splash responsible Oakenshield's prong invitations mortal? It must be taken deep into Mordor and cast back into the fiery chasm from whence it came.",
  },
}

export const Default = Template.bind({})
