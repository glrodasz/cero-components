import React from 'react'
import PropTypes from 'prop-types'
import { iconsMap, mapSize } from './helpers'

import styles from './Icon.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

const Icon = ({ id, className, onClick, name, size, color, background }) => {
  const icon = iconsMap[name]
  const mappedSize = mapSize(size)
  const classes = getClasses(styles)({ color, size, background })

  return (
    <div
      id={id}
      className={classes(className, 'icon', ['color', 'size', 'background'], {
        'is-clickable': !!onClick,
      })}
      style={{ width: mappedSize, height: mappedSize }}
      onClick={onClick}
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
  onClick: PropTypes.func,
  size: PropTypes.oneOf(options.sizes),
  color: PropTypes.oneOf(options.colors),
  background: PropTypes.oneOf(options.backgrounds),
  id: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {
  size: 'md',
  color: 'base',
  background: 'transparent',
}

export default Icon
