import React from 'react'
import PropTypes from 'prop-types'

import Helper from '../Helper'

import styles from '../Token.module.css'

const FontSize = ({ label, value, children }) => {
  return (
    <Helper label={label} value={value}>
      <div className={styles['font-size']} style={{ fontSize: value }}>
        {children}
      </div>
    </Helper>
  )
}

FontSize.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default FontSize
