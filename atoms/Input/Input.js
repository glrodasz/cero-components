import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'

import styles from './Input.module.css'
import { options } from './constants'

const Input = ({ type, value, isInline, onChange, placeholder }) => (
  <input
    className={className(styles.input, {
      [styles['is-inline']]: isInline,
    })}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  ></input>
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isInline: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  isInline: false,
  onChange: () => {},
}

export default Input
