import React, { useState, useRef } from 'react'
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
import { useKeydownEnterKey } from './hooks'
import { shouldShowHelpText } from './helpers'
import withStyles from '../../hocs/withStyles'

export const AddButton = ({
  id,
  getStyles,
  children,
  focusHelpText,
  blurHelpText,
  type,
  icon,
  onAdd,
  defaultIsEditable,
  defaultIsFocused,
  defaultValue,
  defaultIsInvalid,
}) => {
  const [isEditable, setIsEditable] = useState(defaultIsEditable)
  const [inputValue, setInputValue] = useState(defaultValue)
  const [isInvalid, setIsInvalid] = useState(defaultIsInvalid)
  const [isFocused, setIsFocused] = useState(defaultIsFocused)
  const inputRef = useRef(null)

  useKeydownEnterKey(() => setIsEditable(true))

  return (
    <div
      id={`${id}-add-button`}
      className={getStyles('add-button', ['type'], {
        'is-editable': isEditable,
        'is-focused': isFocused,
        'is-invalid': isInvalid,
      })}
      onClick={handleClick({ setIsEditable, inputRef })}
    >
      {isEditable ? (
        <div className={getStyles('edit-container')}>
          <input
            id={`${id}-add-button-input`}
            ref={inputRef}
            type="text"
            value={inputValue}
            autoFocus={!defaultIsEditable}
            onFocus={handleFocus({ setIsFocused })}
            onBlur={handleBlur({
              inputValue,
              setIsEditable,
              setIsFocused,
              setIsInvalid,
            })}
            onChange={handleChange({ setInputValue, setIsInvalid })}
            onKeyDown={handleKeyDown({
              setInputValue,
              setIsEditable,
              inputValue,
              setIsInvalid,
              onAdd,
            })}
          />
          {shouldShowHelpText({
            isEditable,
            inputValue,
            focusHelpText,
            blurHelpText,
          }) && (
            <>
              <Paragraph
                size="sm"
                className="help-text"
                color={isFocused ? 'muted' : 'inverted'}
              >
                {isFocused ? focusHelpText : blurHelpText}
              </Paragraph>
              <Spacer.Horizontal size="sm" />
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
          <Spacer.Horizontal size="sm" />
          <Paragraph weight="medium">{children}</Paragraph>
        </>
      )}
    </div>
  )
}

AddButton.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  icon: PropTypes.oneOf(options.icons),
  id: PropTypes.string,
  focusHelpText: PropTypes.string,
  blurHelpText: PropTypes.string,
  defaultIsEditable: PropTypes.bool,
  defaultIsFocused: PropTypes.bool,
  defaultIsInvalid: PropTypes.bool,
  defaultValue: PropTypes.string,
  isInvalid: PropTypes.bool,
}

AddButton.defaultProps = {
  id: '',
  type: 'primary',
  icon: 'plusCircle',
  defaultIsEditable: false,
  defaultIsFocused: false,
  defaultValue: '',
  onAdd: () => {},
  getStyles: () => {},
}

export default withStyles(styles)(AddButton)
