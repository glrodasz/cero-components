import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Container.module.css'

const Container = ({ children, isVisible }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles['is-visible']]: isVisible,
      })}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
}

Container.defaultProps = {
  isVisible: false,
}

export default Container
