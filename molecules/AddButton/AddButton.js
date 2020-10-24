import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Paragraph from '../../atoms/Paragraph'
import Icon from '../../atoms/Icon'
import Spacer from '../../layout/Spacer'

import styles from './AddButton.module.css'
import { options } from './constants'
import {
  handleClick,
  handleChange,
  handleKeyDown,
  handleBlur,
} from './handlers'

const AddButton = ({ children, type, icon, onAdd }) => {
  const [editMode, setEditMode] = useState(false)
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
          onChange={handleChange({ setInputValue })}
          onBlur={handleBlur({ inputValue, setEditMode })}
          onKeyDown={handleKeyDown({
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
            background={type === 'primary' ? 'highlight' : undefined}
          />
          <Spacer.Vertical size="sm" />
          <Paragraph weight="medium">{children}</Paragraph>
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
}

AddButton.defaultProps = {
  type: 'primary',
  icon: 'plusCircle',
  onAdd: () => {},
}

export default AddButton
