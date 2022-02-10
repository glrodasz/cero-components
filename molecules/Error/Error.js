import React from 'react'
import PropTypes from 'prop-types'

import styles from './Error.module.css'
import withStyles from '../../hocs/withStyles'

import Spacer from '../../layout/Spacer'
import Paragraph from '../../atoms/Paragraph'
import Heading from '../../atoms/Heading'
import Icon from '../../atoms/Icon'

export const Error = ({ title, children, getStyles }) => {
  return (
    <div className={getStyles('error')}>
      <Icon className="icon-warning" name="warning" size="md" />
      <Spacer.Horizontal size="sm" />
      <div>
        {title && <Heading>{title}</Heading>}
        <Paragraph>{children}</Paragraph>
      </div>
    </div>
  )
}

Error.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  title: PropTypes.string,
}

Error.defaultProps = {
  getStyles: () => {},
}

export default withStyles(styles)(Error)
