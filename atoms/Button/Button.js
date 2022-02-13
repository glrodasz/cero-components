import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../Heading'

import styles from './Button.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

import isEmpty from '../../utils/isEmpty'
import isObject from '../../utils/isObject'

export const handleClick = ({ onClick }) => (event) => {
  onClick(event)
}

export const Button = ({
  type,
  children,
  addons,
  isMuted,
  isInline,
  onClick,
  getStyles,
}) => (
  <button
    className={getStyles('button', ['type'], {
      'is-inline': isInline || type === 'tertiary',
      'is-muted': isMuted && type === 'primary',
    })}
    onClick={onClick && handleClick({ onClick })}
  >
    {addons && addons.prepend}

    <Heading
      color={type === 'primary' ? 'inverted' : 'primary'}
      isCentered
      isInline={isObject(addons) && !isEmpty(addons)}
    >
      {children}
    </Heading>

    {addons && addons.append}
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  addons: PropTypes.shape({
    prepend: PropTypes.node,
    append: PropTypes.node,
  }),
  onClick: PropTypes.func,
  isInline: PropTypes.bool,
  isMuted: PropTypes.bool,
}

Button.defaultProps = {
  type: 'primary',
  getStyles: () => {},
  onClick: () => {},
  isInline: false,
}

export default withStyles(styles)(Button)
