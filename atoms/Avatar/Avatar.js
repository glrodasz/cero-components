import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../Picture'

import styles from './Avatar.module.css'
import { options } from './constants'
import { mapSize } from './helpers'
import withStyles from '../../hocs/withStyles'

export const Avatar = ({ src, size, styles }) => {
  return (
    <div className={styles('avatar')}>
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
  styles: PropTypes.func.isRequired,
  size: PropTypes.oneOf(options.sizes),
}

Avatar.defaultProps = {
  size: 'md',
  styles: () => {},
}

export default withStyles(styles)(Avatar)
