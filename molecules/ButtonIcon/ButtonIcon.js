import React from 'react'
import PropTypes from 'prop-types'

import Spacer from '../../layout/Spacer'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

import { options } from './constants'

export const ButtonIcon = ({ children, type, icon }) => (
  <Button
    type={type}
    isInline={true}
    addons={{
      append: (
        <>
          <Spacer.Vertical size="xs"></Spacer.Vertical>
          <Icon
            name={icon}
            color={type === 'primary' ? 'inverted' : 'primary'}
          />
        </>
      ),
    }}
  >
    {children}
  </Button>
)

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.oneOf(options.icons),
  type: PropTypes.oneOf(options.types),
}

ButtonIcon.defaultProps = {
  type: 'secondary',
  icon: 'arrowRight',
}

export default ButtonIcon
