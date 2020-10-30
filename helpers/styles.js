import classNames from 'classnames'

export const getDynamicClasses = (stylesModule = {}, props = {}, arg) => {
  return arg.reduce((pre, cur) => {
    const prop = props[cur]
    const className = stylesModule[`${cur}-${prop}`]

    if (className && prop) {
      return { ...pre, [stylesModule[`${cur}-${prop}`]]: prop }
    }

    return pre
  }, {})
}

export const getModuleClasses = (stylesModule = {}, arg) => {
  return (stylesModule && stylesModule[arg]) || arg
}

export const getObjectClasses = (stylesModule, arg) => {
  return Object.keys(arg).reduce((pre, cur) => {
    return { ...pre, [stylesModule[cur]]: arg[cur] }
  }, {})
}

// ['sizes'] => { [styles[`size-${size}`]]: size }
// 'icon' => styles['icon'] || 'icon'
// { 'is-editable': isEditable } => { styles['is-editable']: isEditable }
export const getClasses = (stylesModule = {}) => (props) => (...args) => {
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
