import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapSize } from '../helpers'

import styles from '../Spacer.module.css'

const Horizontal = ({ size, isVisible }) => (
  <div
    className={classNames(styles.spacer, styles.horizontal, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      height: mapSize(size),
    }}
  />
)

Horizontal.defaultProps = {
  size: 'none',
  isVisible: false,
}

Horizontal.propTypes = {
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
}

export default Horizontal
