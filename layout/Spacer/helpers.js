import { choices } from '../../tokens'
export const mapSize = (size) =>
  typeof size === 'number' ? size : choices.spacing[size]
