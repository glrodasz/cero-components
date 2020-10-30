import React from 'react'
import PropTypes from 'prop-types'

import styles from './Token.module.css'

const Helper = ({ label, value, children }) => {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.description}>
        <span className={styles.label}>{label}</span>
        <span className={styles.label}>
          {Array.isArray(value) ? value.join(', ') : value}
        </span>
      </div>
    </div>
  )
}

Helper.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  children: PropTypes.node.isRequired,
}

export default Helper
