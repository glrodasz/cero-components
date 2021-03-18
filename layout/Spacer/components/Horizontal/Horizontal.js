import React from 'react'
import PropTypes from 'prop-types'
import { mapSize } from '../../helpers'

import styles from '../../Spacer.module.css'
import withStyles from '../../../../hocs/withStyles'

export const Horizontal = ({ getStyles, size, isPlayground }) => (
  <div
    className={getStyles('spacer', 'horizontal', {
      'is-playground': isPlayground,
    })}
    style={{
      height: mapSize(size),
    }}
  />
)

Horizontal.propTypes = {
  getStyles: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  isPlayground: PropTypes.bool,
}

Horizontal.defaultProps = {
  size: 'none',
  isPlayground: false,
  getStyles: () => {},
}

export default withStyles(styles)(Horizontal)
