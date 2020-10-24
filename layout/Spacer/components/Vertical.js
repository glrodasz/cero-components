import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getSize } from '../helpers'

import styles from '../Spacer.module.css'

const Vertical = ({ size, maxHeight, isVisible }) => (
  <div
    className={classNames(styles.spacer, styles.vertical, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      maxHeight,
      width: getSize(size),
    }}
  />
)

Vertical.defaultProps = {
  size: 'none',
  maxHeight: 'auto',
  isVisible: false,
}

Vertical.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Vertical
