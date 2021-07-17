import React from 'react'
import PropTypes from 'prop-types'
import { mapSize } from '../../helpers'

import styles from '../../Spacer.module.css'
import withStyles from '../../../../hocs/withStyles'

export const Horizontal = ({
  getStyles,
  size,
  height,
  maxHeight,
  isPlayground,
}) => (
  <div
    className={getStyles('spacer', 'horizontal', {
      'is-playground': isPlayground,
    })}
    style={{
      height,
      maxHeight,
      width: mapSize(size),
    }}
  />
)

Horizontal.propTypes = {
  getStyles: PropTypes.func.isRequired,
  size: PropTypes.string,
  isPlayground: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Horizontal.defaultProps = {
  size: 'none',
  height: '100%',
  maxHeight: 'auto',
  isPlayground: false,
  getStyles: () => {},
}

export default withStyles(styles)(Horizontal)
