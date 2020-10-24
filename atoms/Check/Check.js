import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Check.module.css'

const Check = ({ children }) => {
  return <div className={classNames(styles['check'])}>{children}</div>
}

Check.propTypes = {
  children: PropTypes.node.isRequired,
}

Check.defaultProps = {}

export default Check
