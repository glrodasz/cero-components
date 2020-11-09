import React from 'react'
import PropTypes from 'prop-types'

import styles from './Card.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const Card = ({ getStyles, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={getStyles('card', ['color', 'size'], {
        'is-clickable': !!onClick,
      })}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

Card.defaultProps = {
  color: 'base',
  size: 'sm',
  getStyles: () => {},
}

export default withStyles(styles)(Card)
