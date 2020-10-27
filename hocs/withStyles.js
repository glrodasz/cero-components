import React from 'react'
import { getClasses } from '../helpers/styles'

// FIXME: Make sure the HOC name can be debug somehow
const getDisplayName = (WrappedComponent) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component'

const withStyles = (styles) => (Component) => {
  const WithStylesComponent = (props) => {
    const allProps = { ...Component.defaultProps, ...props }
    return <Component styles={getClasses(styles)(allProps)} {...props} />
  }

  WithStylesComponent.displayName = getDisplayName(Component)
  WithStylesComponent.defaultProps = Component.defaultProps

  return WithStylesComponent
}

export default withStyles
