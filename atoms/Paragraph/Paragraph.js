import React from 'react'
import PropTypes from 'prop-types'

import styles from './Paragraph.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

export const Paragraph = ({
  getStyles,
  children,
  className,
  isStriked,
  isInline,
  isMonospace,
}) => {
  return (
    <div
      className={getStyles(
        className,
        'paragraph',
        ['color', 'size', 'weight'],
        {
          'is-striked': isStriked,
          'is-inline': isInline,
          'is-monospace': isMonospace,
        }
      )}
    >
      {children}
    </div>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
  className: PropTypes.string,
  isStriked: PropTypes.bool,
  isInline: PropTypes.bool,
  isMonospace: PropTypes.bool,
}

Paragraph.defaultProps = {
  color: 'base',
  size: 'md',
  weight: 'normal',
  getStyles: () => {},
}

export default withStyles(styles)(Paragraph)
