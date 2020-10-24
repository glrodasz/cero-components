import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Picture.module.css'

const Picture = ({ src, width, height, isRounded, withBorder }) => (
  <picture
    className={classNames(styles.picture, {
      [styles['is-rounded']]: isRounded,
      [styles['with-border']]: withBorder,
    })}
  >
    <img src={src} style={{ height, maxWidth: width }} />
  </picture>
)

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isRounded: PropTypes.bool,
  withBorder: PropTypes.bool,
}

Picture.defaultProps = {
  height: 'auto',
  withBorder: false,
}

export default Picture
