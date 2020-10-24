import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Picture from '../Picture'

import styles from './Avatar.module.css'
import { options } from './contants'
import { mapSize } from './helpers'

const Avatar = ({ src, size }) => {
  return (
    <div className={classNames(styles.avatar)}>
      <Picture
        src={src}
        width={mapSize(size)}
        height={mapSize(size)}
        isRounded
        withBorder
      />
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(options.sizes),
}

Avatar.defaultProps = {
  size: 'md',
}

export default Avatar
