import React from 'react'
import { getClasses } from '@glrodasz/storybook-tools-styles'

const withStyles = (styles) => (WrappedComponent) => {
  const WithStylesComponent = (props) => {
    const allProps = { ...WrappedComponent.defaultProps, ...props }
    return (
      <WrappedComponent
        {...allProps}
        getStyles={getClasses(styles)(allProps)}
      />
    )
  }

  WithStylesComponent.displayName = WrappedComponent.displayName

  return WithStylesComponent
}

export default withStyles
