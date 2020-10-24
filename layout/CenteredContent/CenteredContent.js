import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './CenteredContent.module.css'

const CenteredContent = ({ children, isVisible }) => {
  return (
    <div
      className={classNames(styles['centered-content'], {
        [styles['is-visible']]: isVisible,
      })}
    >
      {children}
    </div>
  )
}

CenteredContent.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
}

CenteredContent.defaultProps = {
  isVisible: false,
}

export default CenteredContent
