import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../Helper'

import styles from '../Token.module.css'

const FontFamily = ({ label, value, children }) => {
  return (
    <Helper label={label} value={value}>
      <div className={styles['font-family']} style={{ fontFamily: value }}>
        {children}
      </div>
    </Helper>
  )
}

FontFamily.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.string.isRequired,
}

export default FontFamily
