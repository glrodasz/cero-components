import handleClick from './handleClick'

describe('[ handlers ]', () => {
  describe('#handleClick', () => {
    describe('when `handleClick` is called', () => {
      it('should return a function', () => {
        // Arrange
        const params = {}

        // Act
        const result = typeof handleClick(params)
        const expected = 'function'

        // Assert
        expect(result).toBe(expected)
      })
    })

    describe('when `handleClick` returned function is called', () => {
      it('should call `onClick` with the `event`', () => {
        // Arrange
        const onClickMock = jest.fn()
        const params = {
          onClick: onClickMock,
        }

        const event = 'event'

        // Act
        handleClick(params)(event)

        // Assert
        expect(onClickMock).toHaveBeenCalledWith(event)
      })
    })
  })
})
