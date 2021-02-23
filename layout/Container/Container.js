import React from 'react'
import PropTypes from 'prop-types'
import styles from './Container.module.css'
import withStyles from '../../hocs/withStyles'

export const Container = ({ getStyles, children, isPlayground }) => {
  return (
    <div
      className={getStyles('container', {
        'is-playground': isPlayground,
      })}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  isPlayground: PropTypes.bool,
}

Container.defaultProps = {
  isPlayground: false,
  getStyles: () => {},
}

export default withStyles(styles)(Container)
