import createHandlerChange from './createHandlerChange'

describe('[ handlers ]', () => {
  describe('#createHandlerChange', () => {
    // Given, When, Then
    describe('when `createHandlerChange` is called', () => {
      it('should return a function', () => {
        // Arrange
        const params = {}

        // Act
        const result = typeof createHandlerChange(params)
        const expected = 'function'

        // Assert
        expect(result).toBe(expected)
      })
    })

    describe('when `createHandlerChange` returned function is called', () => {
      it('should call `onChange` with the `event`', () => {
        // Arrange
        const onChangeMock = jest.fn()
        const params = {
          onChange: onChangeMock,
        }

        const event = 'event'

        // Act
        createHandlerChange(params)(event)

        // Assert
        expect(onChangeMock).toHaveBeenCalledWith(event)
      })
    })
  })
})
