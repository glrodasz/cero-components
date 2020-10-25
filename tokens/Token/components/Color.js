import React from 'react'
import PropTypes from 'prop-types'

import styles from '../Token.module.css'

const Color = ({ label, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.color} style={{ backgroundColor: value }}></div>
      <div className={styles.description}>
        <span className={styles.label}>{label}</span>
        <span className={styles.label}>{value}</span>
      </div>
    </div>
  )
}

Color.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Color
