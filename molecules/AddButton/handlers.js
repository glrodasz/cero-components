export const handleClick = ({ setIsEditable, inputRef }) => () => {
  setIsEditable(true)
  inputRef?.current?.focus()
}

export const handleChange = ({ setInputValue }) => (event) => {
  setInputValue(event.currentTarget.value)
}

export const handleKeyDown = ({
  onAdd,
  setIsEditable,
  setInputValue,
  inputValue,
}) => (event) => {
  if (event.key === 'Enter') {
    onAdd(inputValue)
    setInputValue('')
    setIsEditable(false)
  }

  if (event.key === 'Escape') {
    setInputValue('')
    setIsEditable(false)
  }
}

export const handleBlur = ({
  inputValue,
  setIsEditable,
  setIsFocused,
}) => () => {
  setIsFocused(false)
  !inputValue && setIsEditable(false)
}

export const handleFocus = ({ setIsFocused }) => (event) => {
  event && event.currentTarget.select()
  setIsFocused(true)
}
