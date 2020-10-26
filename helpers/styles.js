import classNames from 'classnames'

export const getDynamicClasses = (stylesModule, props, arg) => {
  return arg.reduce((pre, cur) => {
    const prop = props[cur]
    return { ...pre, [stylesModule[`${cur}-${prop}`]]: prop }
  }, {})
}

export const getModuleClasses = (stylesModule, arg) => {
  return stylesModule[arg] || arg
}

export const getObjectClasses = (stylesModule, arg) => {
  return Object.keys(arg).reduce((pre, cur) => {
    return { ...pre, [stylesModule[cur]]: arg[cur] }
  }, {})
}

export const getClasses = (stylesModule) => (props) => (...args) => {
  return classNames(
    args.map((arg) => {
      if (Array.isArray(arg)) {
        return getDynamicClasses(stylesModule, props, arg)
      } else if (typeof arg === 'string') {
        return getModuleClasses(stylesModule, arg)
      } else if (typeof arg === 'object') {
        return getObjectClasses(stylesModule, arg)
      }
    })
  )
}
