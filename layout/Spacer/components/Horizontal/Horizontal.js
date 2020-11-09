import React from 'react'
import PropTypes from 'prop-types'
import { mapSize } from '../../helpers'

import styles from '../../Spacer.module.css'
import withStyles from '../../../../hocs/withStyles'

export const Horizontal = ({ getStyles, size, isVisible }) => (
  <div
    className={getStyles('spacer', 'horizontal', {
      'is-visible': isVisible,
    })}
    style={{
      height: mapSize(size),
    }}
  />
)

Horizontal.propTypes = {
  getStyles: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
}

Horizontal.defaultProps = {
  size: 'none',
  isVisible: false,
  getStyles: () => {},
}

export default withStyles(styles)(Horizontal)
