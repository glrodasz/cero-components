import React from 'react'
import { getClasses } from '../helpers/styles'

const withStyles = (styles) => (WrappedComponent) => {
  const WithStylesComponent = (props) => {
    const allProps = { ...WrappedComponent.defaultProps, ...props }
    return <WrappedComponent styles={getClasses(styles)(allProps)} {...props} />
  }

  WithStylesComponent.displayName = WrappedComponent.displayName

  return WithStylesComponent
}

export default withStyles
