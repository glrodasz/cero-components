import React from 'react'
import PropTypes from 'prop-types'

import styles from './Modal.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'
import Icon from '../Icon'
import Container from '../../layout/Container'
import isEmpty from '../../utils/isEmpty'

const handleClose = ({ onClose }) => () => {
  onClose()
}

const handleSecondaryAction = ({ onSecondaryAction }) => () => {
  onSecondaryAction()
}

export const Modal = ({
  onClose,
  secondaryAction,
  children,
  getStyles,
  isPlayground,
}) => {
  return (
    <div
      className={getStyles('modal', ['type'], {
        'is-playground': isPlayground,
      })}
    >
      <div className={getStyles('heading')}>
        {!!onClose && (
          <Icon
            color="inverted"
            name="angleLeft"
            background="muted"
            onClick={handleClose({ onClose })}
          />
        )}
        {secondaryAction && !isEmpty(secondaryAction) && (
          <Icon
            color="inverted"
            name={secondaryAction?.icon}
            background="muted"
            onClick={handleSecondaryAction({
              onSecondaryAction: secondaryAction?.handler,
            })}
          />
        )}
      </div>
      <Container>{children}</Container>
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
