import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './CenteredContent.module.css'

const CenteredContent = ({ children }) => {
  return (
    <div className={classNames(styles['centered-content'])}>{children}</div>
  )
}

CenteredContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CenteredContent
