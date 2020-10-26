import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Icon from '../../atoms/Icon'

import styles from './Dropdown.module.css'

const Dropdown = ({ id, options, value, isInline, onChange }) => (
  <div
    id={id}
    className={classNames(styles.dropdown, {
      [styles['is-inline']]: isInline,
    })}
  >
    <Icon className="dropdown-icon" name="angleDown" background="highlight" />
    <select
      className={styles['dropdown-select']}
      onChange={onChange}
      value={value}
    >
      {options.map(({ text, value }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
)

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  isInline: PropTypes.bool,
}

Dropdown.defaultProps = {
  value: '',
  isInline: false,
  onChange: () => {},
}

export default Dropdown
