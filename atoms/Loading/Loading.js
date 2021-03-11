import React from 'react'
import PropTypes from 'prop-types'

import styles from './Loading.module.css'
import withStyles from '../../hocs/withStyles'

export const Loading = ({ children, isShown, getStyles, isPlayground }) => {
  if (isShown || isPlayground) {
    return (
      <div className={getStyles('container')}>
        <div className={getStyles('loading', { 'is-shown': isShown })} />
      </div>
    )
  }

  return <>{children}</>
}

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  isShown: PropTypes.bool,
  isPlayground: PropTypes.bool,
}

Loading.defaultProps = {
  getStyles: () => {},
}

export default withStyles(styles)(Loading)
