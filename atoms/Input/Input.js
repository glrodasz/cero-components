import React from 'react'
import PropTypes from 'prop-types'

import styles from './Input.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

const handleChange = ({ onChange }) => () => {
  onChange()
}

export const Input = ({
  getStyles,
  type,
  value,
  isInline,
  onChange,
  placeholder,
}) => (
  <input
    className={getStyles('input', {
      'is-inline': isInline,
    })}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={handleChange({ onChange })}
  ></input>
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
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
  getStyles: () => {},
}

export default withStyles(styles)(Input)
