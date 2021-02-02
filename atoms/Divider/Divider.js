import React from 'react'
import PropTypes from 'prop-types'

import styles from './Divider.module.css'
import withStyles from '../../hocs/withStyles'

export const Divider = ({ getStyles }) => {
  return <div className={getStyles('divider')} />
}

Divider.propTypes = {
  getStyles: PropTypes.func.isRequired,
}

Divider.defaultProps = {
  getStyles: () => {},
}

export default withStyles(styles)(Divider)
