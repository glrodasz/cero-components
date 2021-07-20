import { TaskCounter, styles } from '.'

import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(TaskCounter, styles)

export default {
  title: 'Molecules/TaskCounter',
  component: TaskCounter,
  args: {
    title: 'Em Sméagol body.',
    current: 2,
  },
}

export const Default = Template.bind({})
export const Total = Template.bind({})
Total.args = { total: 10 }

export const Toggleable = Template.bind({})
Toggleable.args = {
  isToggleable: true,
  total: 10,
  children:
    "Fells defeated veins this. There and Back Again. A Hobbit's Tale. Loved lucky Istari difficult lay? Dale fellow's rioting. Blanket Misty Mountain started rival wriggles flatten convinced succumbed closing? Slug town fond pipe-weed flatten recognizes Goblins! Innards pouf admirable freely nothingness sleepless exactly afternoon cruelty Bofur? Craftsmen tested fair Alfrid gets figure words winter's field offer healed squash? These galumphing Grima tread mustn't seen melt ideal picked recover employment. Nazgûl alas luckiest?",
}
