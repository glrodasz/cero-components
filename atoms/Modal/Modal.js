import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './Modal.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'
import Icon from '../Icon'
import Container from '../../layout/Container'
import isEmpty from '../../utils/isEmpty'

import useMedia from '../../hook/useMedia'

import {
  createHandlerClick,
  createHandlerClose,
  createHandlerSecondaryAction,
} from './handlers'

export const Modal = ({
  onClose,
  secondaryAction,
  children,
  getStyles,
  type,
  isPlayground,
}) => {
  const isDesktop = useMedia(['(min-width: 992px)'], [true])
  const [onFadeOut, setOnFadeOut] = useState(false)

  const handleClose = createHandlerClose({ onClose, setOnFadeOut })

  return (
    <div
      className={getStyles('backdrop', {
        'is-playground': isPlayground,
        'on-fade-out': onFadeOut,
      })}
      onClick={handleClose}
    >
      <div
        className={getStyles('modal', ['type'])}
        onClick={createHandlerClick()}
      >
        <div className={getStyles('heading')}>
          {!!onClose && (
            <Icon
              color={isDesktop && type === 'secondary' ? 'primary' : 'inverted'}
              name={isDesktop ? 'cross' : 'angleLeft'}
              background={isDesktop ? 'transparent' : 'muted'}
              onClick={handleClose}
              size={isDesktop ? 'lg' : 'md'}
            />
          )}
          {secondaryAction && !isEmpty(secondaryAction) && (
            <Icon
              color="inverted"
              name={secondaryAction?.icon}
              background="muted"
              onClick={createHandlerSecondaryAction({
                onSecondaryAction: secondaryAction?.handler,
              })}
            />
          )}
        </div>
        <Container>{children}</Container>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  secondaryAction: PropTypes.shape({
    icon: PropTypes.string,
    handler: PropTypes.func,
  }),
  type: PropTypes.oneOf(options.types),
  isPlayground: PropTypes.bool,
}

Modal.defaultProps = {
  getStyles: () => {},
  type: 'primary',
}

export default withStyles(styles)(Modal)
