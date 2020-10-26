import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Horizontal, Vertical } from './components'

import styles from './Spacer.module.css'
import { mapSize } from './helpers'

const Spacer = ({ size, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      display: 'inline-block',
      width: mapSize(size),
      height: mapSize(size),
    }}
  />
)

Spacer.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
}

Spacer.defaultProps = {
  size: 'none',
  isVisible: false,
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical

export default Spacer
