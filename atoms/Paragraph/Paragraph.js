import React from 'react'
import PropTypes from 'prop-types'

import styles from './Paragraph.module.css'
import { options } from './constants'
import { getClasses } from '../../helpers/styles'

const Paragraph = ({ children, className, size, color, weight }) => {
  const classes = getClasses(styles)({ color, size, weight })
  return (
    <div
      className={classes(className, 'paragraph', ['color', 'size', 'weight'])}
    >
      {children}
    </div>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
  className: PropTypes.string,
}

Paragraph.defaultProps = {
  color: 'base',
  size: 'md',
  weight: 'normal',
}

export default Paragraph
