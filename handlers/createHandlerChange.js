const createHandlerChange =
  ({ onChange }) =>
  (event) => {
    onChange(event)
  }

export default createHandlerChange
