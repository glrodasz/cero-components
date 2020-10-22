export const handleClick = ({ setEditMode }) => () => {
  setEditMode(true)
}

export const handleOnChange = ({ setInputValue }) => (event) => {
  setInputValue(event.currentTarget.value)
}

export const handleOnKeyDown = ({
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
}
