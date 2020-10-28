import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Heading from '../Heading'

import styles from './Button.module.css'
import { options } from './contants'

const Button = ({ type, children, isMuted, isInline, onClick }) => (
  <button
    className={classNames(styles.button, {
      [styles[`type-${type}`]]: type,
      [styles['is-inline']]: isInline || type === 'tertiary',
      [styles['is-muted']]: isMuted && type === 'primary',
    })}
    onClick={onClick}
  >
    <Heading color={type === 'primary' ? 'inverted' : 'primary'}>
      {children}
    </Heading>
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(options.types),
  onClick: PropTypes.func,
  isInline: PropTypes.bool,
  isMuted: PropTypes.bool,
}

Button.defaultProps = {
  type: 'primary',
  onClick: () => {},
  isInline: false,
}

export default Button
