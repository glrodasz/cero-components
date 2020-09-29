import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Paragraph.module.css'

const Paragraph = ({ children }) => {
  return <div className={classNames(styles.component)}>{children}</div>
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
}

Paragraph.defaultProps = {}

export default Paragraph
