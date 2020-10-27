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
  handleFocus,
} from './handlers'
import { shouldShowHelpText } from './helpers'

const AddButton = ({
  children,
  focusHelpText,
  blurHelpText,
  type,
  icon,
  onAdd,
  defaultEditMode,
  defaultValue,
}) => {
  const [editMode, setEditMode] = useState(defaultEditMode)
  const [inputValue, setInputValue] = useState(defaultValue)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div
      className={classNames(styles['add-button'], {
        [styles[`type-${type}`]]: type,
        [styles['is-editable']]: editMode,
        [styles['is-focused']]: isFocused,
      })}
      onClick={handleClick({ setEditMode })}
    >
      {editMode ? (
        <div className={styles['edit-container']}>
          <input
            type="text"
            value={inputValue}
            autoFocus={!defaultEditMode}
            onFocus={handleFocus({ setIsFocused })}
            onBlur={handleBlur({ inputValue, setEditMode, setIsFocused })}
            onChange={handleChange({ setInputValue })}
            onKeyDown={handleKeyDown({
              setInputValue,
              setEditMode,
              inputValue,
              onAdd,
            })}
          />
          {shouldShowHelpText({
            editMode,
            inputValue,
            focusHelpText,
            blurHelpText,
          }) && (
            <>
              <Paragraph
                className="help-text"
                color={isFocused ? 'muted' : 'inverted'}
              >
                {isFocused ? focusHelpText : blurHelpText}
              </Paragraph>
              <Spacer.Vertical size="sm" />
            </>
          )}
        </div>
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
  focusHelpText: PropTypes.string,
  blurHelpText: PropTypes.string,
  defaultEditMode: PropTypes.bool,
  defaultValue: PropTypes.string,
}

AddButton.defaultProps = {
  type: 'primary',
  icon: 'plusCircle',
  defaultEditMode: false,
  defaultValue: '',
  onAdd: () => {},
}

export default AddButton
