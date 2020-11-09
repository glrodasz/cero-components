import React from 'react'
import PropTypes from 'prop-types'
import styles from './Container.module.css'
import withStyles from '../../hocs/withStyles'

export const Container = ({ getStyles, children, isVisible }) => {
  return (
    <div
      className={getStyles('container', {
        'is-visible': isVisible,
      })}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}

Container.defaultProps = {
  isVisible: false,
  getStyles: () => {},
}

export default withStyles(styles)(Container)
