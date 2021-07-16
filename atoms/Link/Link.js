import React from 'react'
import PropTypes from 'prop-types'

import styles from './Link.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'

import Paragraph from '../Paragraph'

export const Link = ({ children, color, getStyles }) => {
  return (
    <a className={getStyles('link', ['color'])}>
      <Paragraph color={color} weight="medium">
        {children}
      </Paragraph>
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  color: PropTypes.oneOf(options.colors),
}

Link.defaultProps = {
  getStyles: () => {},
  color: 'primary',
}

export default withStyles(styles)(Link)
