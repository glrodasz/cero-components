import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Spacer from '../Spacer'

import styles from './FullHeightContent.module.css'

const FullHeightContent = ({ isVisible, content, footer }) => {
  return (
    <div
      className={classNames(styles['full-height-content'], {
        [styles['is-visible']]: isVisible,
      })}
    >
      <div className={styles.content}>{content}</div>
      <Spacer.Horizontal size="sm" />
      <div className={styles.footer}>{footer}</div>
    </div>
  )
}

FullHeightContent.propTypes = {
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
}

FullHeightContent.defaultProps = {
  isVisible: false,
}

export default FullHeightContent
