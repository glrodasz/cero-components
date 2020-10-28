export const handleClick = ({ setEditMode, inputRef }) => () => {
  setEditMode(true)
  inputRef?.current?.focus()
}

export const handleChange = ({ setInputValue }) => (event) => {
  setInputValue(event.currentTarget.value)
}

export const handleKeyDown = ({
  onAdd,
  setEditMode,
  setInputValue,
  inputValue,
}) => (event) => {
  if (event.key === 'Enter') {
    onAdd(inputValue)
    setInputValue('')
    setEditMode(false)
  }

  if (event.key === 'Escape') {
    setInputValue('')
    setEditMode(false)
  }
}

export const handleBlur = ({ inputValue, setEditMode, setIsFocused }) => () => {
  setIsFocused(false)
  !inputValue && setEditMode(false)
}

export const handleFocus = ({ setIsFocused }) => (event) => {
  event && event.currentTarget.select()
  setIsFocused(true)
}
