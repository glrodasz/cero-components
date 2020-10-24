import FullHeightContent from '.'

import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(FullHeightContent)

export default {
  title: 'Layout/FullHeightContent',
  component: FullHeightContent,
  args: {
    isVisible: true,
    content:
      'Mice defiling required Bilbo sailing unspoiled this hunting. 14th refuge knowing breath Middle-earth sack demon children?',
    footer:
      'Ambition living aid indeed mutton suffered l failing kindness Éothain? Red others Goblin-town spot stuff riddles hero?',
  },
  argTypes: {
    children: { control: 'array' },
  },
}

export const Default = Template.bind({})
