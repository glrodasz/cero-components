import React from 'react'
import PropTypes from 'prop-types'

import styles from './Modal.module.css'
import { options } from './constants'
import withStyles from '../../hocs/withStyles'
import Icon from '../../atoms/Icon'
import Container from '../../layout/Container'

const handleClose = ({ onClose }) => () => {
  onClose()
}

// TODO: Define if this is an Atom or a Molecule. Review if
// there are more Atoms with a Layout component and decide
// if a Layout component behaves like a different Atom or
// we should not take them into consideration
// The people spoke and they think is a Molecule
export const Modal = ({ onClose, children, getStyles, isPlayground }) => {
  return (
    <div
      className={getStyles('modal', ['type'], {
        'is-playground': isPlayground,
      })}
    >
      {!!onClose && (
        <Icon
          color="inverted"
          name="angleLeft"
          background="muted"
          onClick={handleClose({ onClose })}
        />
      )}
      <Container>{children}</Container>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(options.types),
  isPlayground: PropTypes.bool,
}

Modal.defaultProps = {
  getStyles: () => {},
  type: 'primary',
}

export default withStyles(styles)(Modal)
