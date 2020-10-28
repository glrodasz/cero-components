import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Card.module.css'
import { options } from './contants'

const Card = ({ color, size, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.card, {
        [styles[`color-${color}`]]: color,
        [styles[`size-${size}`]]: size,
        [styles['is-clickable']]: !!onClick,
      })}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

Card.defaultProps = {
  color: 'base',
  size: 'sm',
}

export default Card
