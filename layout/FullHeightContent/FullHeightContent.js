import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Spacer from '../Spacer'

import styles from './FullHeightContent.module.css'

const FullHeightContent = ({ isVisible, children }) => {
  return (
    <div
      className={classNames(styles['full-height-content'], {
        [styles['is-visible']]: isVisible,
      })}
    >
      <div className={styles.content}>{children[0]}</div>
      <Spacer.Horizontal size="sm" />
      <div className={styles.footer}>{children[1]}</div>
    </div>
  )
}

FullHeightContent.propTypes = {
  children: PropTypes.array.isRequired,
  isVisible: PropTypes.bool,
}

FullHeightContent.defaultProps = {
  isVisible: false,
}

export default FullHeightContent
