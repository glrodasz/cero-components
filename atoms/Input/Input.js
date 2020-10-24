import React from 'react'
import PropTypes from 'prop-types'

import styles from './Input.module.css'
import { options } from './constants'

const Input = ({ type, value, onChange, placeholder }) => (
  <input
    className={styles.input}
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
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  onChange: () => {},
}

export default Input
