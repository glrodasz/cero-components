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
  defaultValue,
}) => {
  const [isEditable, setIsEditable] = useState(defaultIsEditable)
  const [inputValue, setInputValue] = useState(defaultValue)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)

  return (
    <div
      id={`${id}-add-button`}
      className={getStyles('add-button', ['type'], {
        'is-editable': isEditable,
        'is-focused': isFocused,
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
            onBlur={handleBlur({ inputValue, setIsEditable, setIsFocused })}
            onChange={handleChange({ setInputValue })}
            onKeyDown={handleKeyDown({
              setInputValue,
              setIsEditable,
              inputValue,
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
  defaultValue: PropTypes.string,
}

AddButton.defaultProps = {
  id: '',
  type: 'primary',
  icon: 'plusCircle',
  defaultIsEditable: false,
  defaultValue: '',
  onAdd: () => {},
  getStyles: () => {},
}

export default withStyles(styles)(AddButton)
