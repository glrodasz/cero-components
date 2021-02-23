import React from 'react'
import PropTypes from 'prop-types'

import styles from './CenteredContent.module.css'
import withStyles from '../../hocs/withStyles'

export const CenteredContent = ({ getStyles, children, isPlayground }) => {
  return (
    <div
      className={getStyles('centered-content', {
        'is-playground': isPlayground,
      })}
    >
      {children}
    </div>
  )
}

CenteredContent.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  isPlayground: PropTypes.bool,
}

CenteredContent.defaultProps = {
  isPlayground: false,
  getStyles: () => {},
}

export default withStyles(styles)(CenteredContent)
