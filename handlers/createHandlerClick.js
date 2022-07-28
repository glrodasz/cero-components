const createHandlerClick =
  ({ onClick }) =>
  (event) => {
    onClick(event)
  }

export default createHandlerClick
