import React from 'react'
import PropTypes from 'prop-types'

import styles from './Heading.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const Heading = ({ children, getStyles }) => {
  return (
    <header className={getStyles('heading', ['color', 'size', 'weight'])}>
      {children}
    </header>
  )
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
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
