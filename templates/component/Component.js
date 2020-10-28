import React from 'react'
import PropTypes from 'prop-types'

import styles from './Component.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const Component = ({ children, styles }) => {
  return <div className={styles('component')}>{children}</div>
}

Component.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
}

Component.defaultProps = {
  styles: () => {},
}

export default withStyles(styles)(Component)
