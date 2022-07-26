import keyboardCodes from '../../utils/keyboardCodes'
import isEmpty from '../../utils/isEmpty'

const setIsInvalidAnimation = ({ setIsInvalid }) => {
  setIsInvalid(false)
  setTimeout(() => setIsInvalid(true), 0)
}

export const handleClick =
  ({ setIsEditable, inputRef }) =>
  () => {
    setIsEditable(true)
    inputRef?.current?.focus()
  }

export const handleChange =
  ({ setInputValue, setIsInvalid }) =>
  (event) => {
    const { value } = event.currentTarget
    setIsInvalid(false)
    setInputValue(value)
  }

export const handleKeyDown =
  ({ onAdd, setIsEditable, setInputValue, setIsInvalid, inputValue }) =>
  (event) => {
    if (event.key === keyboardCodes.ENTER) {
      onAdd({ value: inputValue })
      setInputValue('')
      setIsEditable(false)

      if (isEmpty(inputValue)) {
        setIsInvalidAnimation({ setIsInvalid })
      }
    }

    if (event.key === keyboardCodes.ESC) {
      setInputValue('')
      setIsEditable(false)
      setIsInvalid(false)
    }
  }

export const handleBlur =
  ({ inputValue, setIsEditable, setIsFocused, setIsInvalid }) =>
  () => {
    setIsFocused(false)
    setIsInvalid(false)
    !inputValue && setIsEditable(false)
  }

export const handleFocus =
  ({ setIsFocused }) =>
  (event) => {
    event && event.currentTarget.select()
    setIsFocused(true)
  }
