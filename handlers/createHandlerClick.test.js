import createHandlerClick from './createHandlerClick'

describe('[ handlers ]', () => {
  describe('#createHandlerClick', () => {
    describe('when `createHandlerClick` is called', () => {
      it('should return a function', () => {
        // Arrange
        const params = {}

        // Act
        const result = typeof createHandlerClick(params)
        const expected = 'function'

        // Assert
        expect(result).toBe(expected)
      })
    })

    describe('when `createHandlerClick` returned function is called', () => {
      it('should call `onClick` with the `event`', () => {
        // Arrange
        const onClickMock = jest.fn()
        const params = {
          onClick: onClickMock,
        }

        const event = 'event'

        // Act
        createHandlerClick(params)(event)

        // Assert
        expect(onClickMock).toHaveBeenCalledWith(event)
      })
    })
  })
})
