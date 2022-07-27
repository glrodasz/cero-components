import handleChange from './handleChange'

describe('[ handlers ]', () => {
  describe('#handleChange', () => {
    // Given, When, Then
    describe('when `handleChange` is called', () => {
      it('should return a function', () => {
        // Arrange
        const params = {}

        // Act
        const result = typeof handleChange(params)
        const expected = 'function'

        // Assert
        expect(result).toBe(expected)
      })
    })

    describe('when `handleChange` returned function is called', () => {
      it('should call `onChange` with the `event`', () => {
        // Arrange
        const onChangeMock = jest.fn()
        const params = {
          onChange: onChangeMock,
        }

        const event = 'event'

        // Act
        handleChange(params)(event)

        // Assert
        expect(onChangeMock).toHaveBeenCalledWith(event)
      })
    })
  })
})
