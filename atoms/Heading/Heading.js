import React from 'react'
import PropTypes from 'prop-types'

import styles from './Heading.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const Heading = ({ children, isCentered, isInline, getStyles }) => {
  return (
    <h1
      className={getStyles('heading', ['color', 'size', 'weight'], {
        'is-centered': isCentered,
        'is-inline': isInline,
      })}
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
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
}

Heading.defaultProps = {
  color: 'base',
  size: 'md',
  weight: 'bold',
}

export default withStyles(styles)(Heading)
