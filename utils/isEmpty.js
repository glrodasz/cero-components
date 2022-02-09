import isObject from './isObject'

const NOT_EMPTIABLE_TYPES = [
  'number',
  'undefined',
  'symbol',
  'boolean',
  'bigint',
  'function',
]

const isEmpty = (value) => {
  if (value === null || NOT_EMPTIABLE_TYPES.includes(typeof value)) {
    throw new Error('The value is not an object, an array or a string')
  }

  if (isObject(value)) {
    return (
      Object.keys(value).length === 0 &&
      Object.keys(Object.getPrototypeOf(value)).length === 0
    )
  }

  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0
  }
}
export default isEmpty
