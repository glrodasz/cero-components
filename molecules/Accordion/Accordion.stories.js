import { Accordion, styles } from '.'

import { getTemplate } from '@glrodasz/storybook-tools-helpers'

const Template = getTemplate(Accordion, styles)

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  args: {
    title: 'Em Sméagol body.',
    children:
      "Fells defeated veins this. There and Back Again. A Hobbit's Tale. Loved lucky Istari difficult lay? Dale fellow's rioting. Blanket Misty Mountain started rival wriggles flatten convinced succumbed closing? Slug town fond pipe-weed flatten recognizes Goblins! Innards pouf admirable freely nothingness sleepless exactly afternoon cruelty Bofur? Craftsmen tested fair Alfrid gets figure words winter's field offer healed squash? These galumphing Grima tread mustn't seen melt ideal picked recover employment. Nazgûl alas luckiest?",
  },
}

export const Default = Template.bind({})

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
