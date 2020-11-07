import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Heading from '../Heading'

import styles from './Button.module.css'
import { options } from './constants'

const Button = ({ type, children, addons, isMuted, isInline, onClick }) => (
  <button
    className={classNames(styles.button, {
      [styles[`type-${type}`]]: type,
      [styles['is-inline']]: isInline || type === 'tertiary',
      [styles['is-muted']]: isMuted && type === 'primary',
    })}
    onClick={onClick}
  >
    {addons && addons.prepend}
    <Heading color={type === 'primary' ? 'inverted' : 'primary'}>
      {children}
    </Heading>
    {addons && addons.append}
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(options.types),
  addons: PropTypes.shape({
    prepend: PropTypes.node,
    append: PropTypes.node,
  }),
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
