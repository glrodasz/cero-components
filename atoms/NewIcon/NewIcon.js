import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { iconsDictionary, mapSize } from './helpers'

import styles from './NewIcon.module.css'

const NewIcon = ({
  iconName,
  size,
  hasBackground,
  classes,
  iconStyles,
  svgTitle,
}) => {
  const svgRender = iconsDictionary[iconName] || iconsDictionary.default
  const mappedSize = mapSize(size)

  return (
    <div
      padding={mappedSize}
      className={classNames(styles['icon-container'], {
        classes: classes,
        [styles['has-background']]: hasBackground,
      })}
    >
      <svg
        viewBox={svgRender.viewBox}
        className={classes}
        style={iconStyles}
        title={svgTitle}
        xmlns="http://www.w3.org/2000/svg"
        width={mappedSize}
        height={mappedSize}
      >
        {svgRender.svg}
      </svg>
    </div>
  )
}

NewIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  hasBackground: PropTypes.bool,
  classes: PropTypes.string,
  iconStyles: PropTypes.object,
  svgTitle: PropTypes.string,
}

NewIcon.defaultProps = {
  size: 'md',
  hasBackground: false,
}

export default NewIcon
