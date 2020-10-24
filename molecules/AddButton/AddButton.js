import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Paragraph from '../../atoms/Paragraph'
import Icon from '../../atoms/Icon'
import Spacer from '../../layout/Spacer'

import styles from './AddButton.module.css'
import { options } from './constants'
import { handleClick, handleOnChange, handleOnKeyDown } from './handlers'

const AddButton = ({ children, type, icon, onAdd, isEditable }) => {
  const [editMode, setEditMode] = useState(isEditable)
  const [inputValue, setInputValue] = useState('')

  return (
    <div
      className={classNames(styles['add-button'], {
        [styles[`type-${type}`]]: type,
        [styles['is-editable']]: editMode,
      })}
      onClick={handleClick({ setEditMode })}
    >
      {editMode ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange({ setInputValue })}
          onKeyDown={handleOnKeyDown({
            setInputValue,
            setEditMode,
            inputValue,
            onAdd,
          })}
          autoFocus
        />
      ) : (
        <>
          <Icon
            name={icon}
            color={type === 'primary' ? 'base' : 'highlight'}
            hasBackground={type === 'primary'}
          />
          <Spacer.Vertical size="sm" />
          <Paragraph>{children}</Paragraph>
        </>
      )}
    </div>
  )
}

AddButton.propTypes = {
  children: PropTypes.node.isRequired,
  onAdd: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  icon: PropTypes.oneOf(options.icons),
  isEditable: PropTypes.bool,
}

AddButton.defaultProps = {
  type: 'primary',
  icon: 'plusCircle',
  isEditable: false,
  onAdd: () => {},
}

export default AddButton
