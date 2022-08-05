import React from 'react'
import PropTypes from 'prop-types'
import { mapSize } from './helpers'

import styles from './Icon.module.css'
import { options, iconsMap } from './constants'
import withStyles from '../../hocs/withStyles'

import createHandlerClick from '../../handlers/createHandlerClick'

export const Icon = ({
  id,
  className,
  onClick,
  name,
  size,
  isClickable,
  getStyles,
}) => {
  const icon = iconsMap[name] ?? {}
  const mappedSize = mapSize(size)

  return (
    <div
      id={id}
      className={getStyles(className, 'icon', ['color', 'size', 'background'], {
        'is-clickable': isClickable || !!onClick,
      })}
      style={{ width: mappedSize, height: mappedSize }}
      onClick={onClick && createHandlerClick({ onClick })}
    >
      <svg
        viewBox={icon.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        width={mappedSize}
        height={mappedSize}
      >
        {icon.svg}
      </svg>
    </div>
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(options.names).isRequired,
  getStyles: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(options.sizes),
  color: PropTypes.oneOf(options.colors),
  background: PropTypes.oneOf(options.backgrounds),
  id: PropTypes.string,
  className: PropTypes.string,
  isClickable: PropTypes.bool,
}

Icon.defaultProps = {
  size: 'md',
  color: 'base',
  background: 'transparent',
  isClickable: false,
  getStyles: () => {},
}

export default withStyles(styles)(Icon)
