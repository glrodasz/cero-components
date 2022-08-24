import React from 'react'
import { getClasses } from '@glrodasz/storybook-tools-styles'

const withStyles = (styles) => (WrappedComponent) => {
  const WithStylesComponent = (props) => {
    const allProps = { ...WrappedComponent.defaultProps, ...props }
    return (
      <WrappedComponent getStyles={getClasses(styles)(allProps)} {...props} />
    )
  }

  WithStylesComponent.displayName = WrappedComponent.displayName

  return WithStylesComponent
}

export default withStyles
