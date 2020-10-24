import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Icon from '../../atoms/Icon'

import styles from './Dropdown.module.css'

const Dropdown = ({ id, options, value, onChange }) => (
  <div id={id} className={classNames(styles.dropdown)}>
    <Icon className="icon" name="angleDown" hasBackground />
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
  value: PropTypes.string,
  id: PropTypes.string,
}

Dropdown.defaultProps = {
  value: '',
  onChange: () => {},
}

export default Dropdown
