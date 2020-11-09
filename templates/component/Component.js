import React from 'react'
import PropTypes from 'prop-types'

import styles from './Component.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const Component = ({ children, getStyles }) => {
  return <div className={getStyles('component')}>{children}</div>
}

Component.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
}

Component.defaultProps = {
  getStyles: () => {},
}

export default withStyles(styles)(Component)
