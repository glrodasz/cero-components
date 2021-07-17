import React from 'react'
import PropTypes from 'prop-types'

import styles from './Link.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

import Paragraph from '../Paragraph'

export const Link = ({ children, size, color, getStyles }) => {
  return (
    <a className={getStyles('link', ['color'])}>
      <Paragraph size={size} color={color} weight="semibold" isInline>
        {children}
      </Paragraph>
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
}

Link.defaultProps = {
  getStyles: () => {},
  color: 'primary',
  size: 'md',
}

export default withStyles(styles)(Link)
