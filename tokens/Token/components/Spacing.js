import React from 'react'
import PropTypes from 'prop-types'

import Spacer from '../../../layout/Spacer'
import Helper from '../Helper'

import styles from '../Token.module.css'

const Spacing = ({ label, value }) => {
  return (
    <Helper label={label} value={value}>
      <div className={styles.spacer}>
        <Spacer size={value} isPlayground />
      </div>
    </Helper>
  )
}

Spacing.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Spacing
