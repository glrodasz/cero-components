export const handleClick = ({ setEditMode }) => () => {
  setEditMode(true)
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

export const handleBlur = ({ inputValue, setEditMode }) => () => {
  !inputValue && setEditMode(false)
}
