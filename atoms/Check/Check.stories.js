import Check from '.'
import { getTemplate, getListTemplate } from '../../helpers/storybook'

const Template = getTemplate(Check)
const ListTemplate = getListTemplate(Check)

export default {
  title: 'Atoms/Check',
  component: Check,
  args: {},
  argTypes: {},
}

export const Default = () => Template.bind({})
export const List = () => ListTemplate.bind({})
