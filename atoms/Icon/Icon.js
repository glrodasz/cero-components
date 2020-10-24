import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { iconsMap, mapSize } from './helpers'

import styles from './Icon.module.css'
import { options } from './constants'

const Icon = ({ id, className, name, size, color, hasBackground }) => {
  const icon = iconsMap[name]
  const mappedSize = mapSize(size)

  return (
    <div
      id={id}
      className={classNames(className, styles.icon, {
        [styles['has-background']]: hasBackground,
        [styles[`color-${color}`]]: color,
      })}
      style={{ width: mappedSize, height: mappedSize }}
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
  size: PropTypes.oneOf(options.sizes),
  color: PropTypes.oneOf(options.colors),
  id: PropTypes.string,
  className: PropTypes.string,
  hasBackground: PropTypes.bool,
}

Icon.defaultProps = {
  size: 'md',
  color: 'base',
  hasBackground: false,
}

export default Icon
