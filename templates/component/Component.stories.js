import Component from '.'
import { getTemplate, getListTemplate } from '../../helpers/storybook'

const Template = getTemplate(Component)
const ListTemplate = getListTemplate(Component)

export default {
  title: 'Atomic/Component',
  component: Component,
  args: {},
  argTypes: {},
}

export const Default = () => Template.bind({})
export const List = () => ListTemplate.bind({})
