import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import styles from './Check.module.css'
import withStyles from '../../hocs/withStyles'

export const Check = ({ checked, styles }) => {
  return checked ? (
    <Icon name="checkCircle" color="muted" isClickable />
  ) : (
    <span className={styles('check')} />
  )
}

Check.propTypes = {
  styles: PropTypes.func.isRequired,
  checked: PropTypes.bool,
}

Check.defaultProps = {
  styles: () => {},
}

export default withStyles(styles)(Check)
