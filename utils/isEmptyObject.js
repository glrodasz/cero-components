import isObject from './isObject'

// FIXME: Doesn't work for Object.create({ a: "a"}) factory
const isEmptyObject = (obj) => isObject(obj) && Object.keys(obj).length === 0

export default isEmptyObject
