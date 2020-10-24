import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getSize } from '../helpers'

import styles from '../Spacer.module.css'

const Vertical = ({ size, height, maxHeight, isVisible }) => (
  <div
    className={classNames(styles.spacer, styles.vertical, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      height,
      maxHeight,
      width: getSize(size),
    }}
  />
)

Vertical.defaultProps = {
  size: 'none',
  height: '100%',
  maxHeight: 'auto',
  isVisible: false,
}

Vertical.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Vertical
