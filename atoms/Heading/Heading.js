import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Heading.module.css'
import { options } from './constants'

const Heading = ({ children, color, size }) => (
  <heading
    className={classNames(styles.heading, {
      [styles[`color-${color}`]]: color,
      [styles[`size-${size}`]]: size,
    })}
  >
    {children}
  </heading>
)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

Heading.defaultProps = {
  color: 'default',
  size: 'md',
}

export default Heading
