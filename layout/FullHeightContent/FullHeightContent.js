import React from 'react'
import PropTypes from 'prop-types'

import Spacer from '../Spacer'

import styles from './FullHeightContent.module.css'
import withStyles from '../../hocs/withStyles'

export const FullHeightContent = ({
  getStyles,
  isVisible,
  content,
  footer,
}) => {
  return (
    <div
      className={getStyles('full-height-content', {
        'is-visible': isVisible,
      })}
    >
      <div className={styles.content}>{content}</div>
      <Spacer.Horizontal size="sm" />
      <div className={styles.footer}>{footer}</div>
    </div>
  )
}

FullHeightContent.propTypes = {
  getStyles: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
}

FullHeightContent.defaultProps = {
  isVisible: false,
  getStyles: () => {},
}

export default withStyles(styles)(FullHeightContent)
