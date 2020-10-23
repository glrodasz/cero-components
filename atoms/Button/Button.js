import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Button.module.css'
import { options } from './contants'

const Button = ({ type, children, isInline, onClick }) => (
  <button
    className={classNames(styles.button, {
      [styles[`type-${type}`]]: type,
      [styles['is-inline']]: isInline || type === 'tertiary',
    })}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(options.types),
  onClick: PropTypes.func,
  isInline: PropTypes.bool,
}

Button.defaultProps = {
  type: 'primary',
  onClick: () => {},
  isInline: false,
}

export default Button
