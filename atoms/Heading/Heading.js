import React from 'react'
import PropTypes from 'prop-types'

import styles from './Heading.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

import { createHandlerBlur } from './handlers'

export const Heading = ({
  children,
  isCentered,
  isInline,
  isEditable,
  onBlur,
  getStyles,
}) => {
  return (
    <h1
      className={getStyles('heading', ['color', 'size', 'weight'], {
        'is-centered': isCentered,
        'is-inline': isInline,
      })}
      onBlur={createHandlerBlur({
        onBlur,
      })}
      contentEditable={isEditable}
    >
      {children}
    </h1>
  )
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  isInline: PropTypes.bool,
  isCentered: PropTypes.bool,
  isEditable: PropTypes.bool,
  onBlur: PropTypes.func,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
}

Heading.defaultProps = {
  color: 'base',
  size: 'md',
  weight: 'bold',
  isEditable: false,
  onBlur: () => {},
}

export default withStyles(styles)(Heading)
