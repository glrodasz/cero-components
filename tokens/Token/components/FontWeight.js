import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../Helper'

import styles from '../Token.module.css'

const FontWeight = ({ label, value, children }) => {
  return (
    <Helper label={label} value={value}>
      <div className={styles['font-weight']} style={{ fontWeight: value }}>
        {children}
      </div>
    </Helper>
  )
}

FontWeight.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
}

export default FontWeight
