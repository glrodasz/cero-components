import React from 'react'
import PropTypes from 'prop-types'

import styles from './Heading.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

const Heading = ({ children, styles }) => {
  return (
    <heading className={styles('heading', ['color', 'size'])}>
      {children}
    </heading>
  )
}

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  styles: PropTypes.func.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

Heading.defaultProps = {
  color: 'base',
  size: 'md',
}

export default withStyles(styles)(Heading)
