import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Component.module.css'

const Component = ({ children }) => {
  return <div className={classNames(styles['component'])}>{children}</div>
}

Component.propTypes = {
  children: PropTypes.node.isRequired,
}

Component.defaultProps = {}

export default Component
