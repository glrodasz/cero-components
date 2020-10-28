import { Task, styles, options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Task, styles)
const ListTemplate = getListTemplate(Task, styles)

export default {
  title: 'Molecules/Task',
  component: Task,
  args: {
    children: 'Sir Goblin-town feels characters ruined precautions.',
  },
  argTypes: {
    types: getOptionsArgTypes(options.types),
    onCheck: { defaultValue: null },
    onDelete: { defaultValue: null },
  },
}

export const Default = Template.bind({})

export const Long = Template.bind({})
Long.args = {
  children:
    "Swords are no more use here. Moments shiny rings Cirith nowhere garrison ax pointy endless mention trousers. Retribution Frodo's wrong? Them leaf question require spared houses sapphire Balin. Kind pouring Lothlórien ragged retribution covers lair less goings recognizes unleash. Whence Precious token hidden hire bandy make farming. Shards farmer unfriendly handle Bain gongs. Mend recall sorry oncoming roll unmade cries visitors Lobelia Sackville-Baggins was bidden. Dank rather between short doomed Mellon tomb consequence girl crescent attacking.",
}

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true,
}

export const Types = ListTemplate.bind({})
Types.args = { items: options.types.map((type) => ({ type })) }
