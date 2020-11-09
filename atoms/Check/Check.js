import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import styles from './Check.module.css'
import withStyles from '../../hocs/withStyles'

export const Check = ({ checked, getStyles }) => {
  return checked ? (
    <Icon name="checkCircle" color="muted" isClickable />
  ) : (
    <span className={getStyles('check')} />
  )
}

Check.propTypes = {
  getStyles: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

Check.defaultProps = {
  getStyles: () => {},
}

export default withStyles(styles)(Check)
