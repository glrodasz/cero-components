const isObject = (obj) =>
  Object.prototype.toString.call(obj) === '[object Object]'

export default isObject
