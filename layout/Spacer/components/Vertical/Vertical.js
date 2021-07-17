import React from 'react'
import PropTypes from 'prop-types'
import { mapSize } from '../../helpers'

import styles from '../../Spacer.module.css'
import withStyles from '../../../../hocs/withStyles'

export const Vertical = ({ getStyles, size, isPlayground }) => (
  <div
    className={getStyles('spacer', 'vertical', {
      'is-playground': isPlayground,
    })}
    style={{
      height: mapSize(size),
    }}
  />
)

Vertical.propTypes = {
  getStyles: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  isPlayground: PropTypes.bool,
}

Vertical.defaultProps = {
  size: 'none',
  isPlayground: false,
  getStyles: () => {},
}

export default withStyles(styles)(Vertical)
