import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Paragraph from '../../atoms/Paragraph'
import Icon from '../../atoms/Icon'
import Spacer from '../../layout/Spacer'

import styles from './AddButton.module.css'

const AddButton = ({ children, type }) => {
  return (
    <div
      className={classNames(styles['add-button'], {
        [styles[`type-${type}`]]: type,
      })}
    >
      <Icon type="arrowRight" size="sm" />
      <Spacer.Vertical size="xs" />
      <Paragraph>{children}</Paragraph>
    </div>
  )
}

AddButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
}

AddButton.defaultProps = {
  type: 'primary',
}

export default AddButton
