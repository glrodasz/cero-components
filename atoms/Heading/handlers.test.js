import { createHandlerBlur } from './handlers'

describe('[ Atoms / Heading / Handlers ]', () => {
  describe('#createHandlerBlur', () => {
    describe('when `createHandlerBlur` is called', () => {
      it('should return a function', () => {
        // Arrange
        const params = { onBlur: () => {} }

        // Act
        const result = typeof createHandlerBlur(params)
        const expected = 'function'

        // Assert
        expect(result).toBe(expected)
      })
    })

    describe('when `createHandlerBlur` returned function is called', () => {
      it('should call `onBlur` with the event', () => {
        // Arrange
        const onBlur = vi.fn()
        const event = { target: {} }

        // Act
        createHandlerBlur({ onBlur })(event)

        // Assert
        expect(onBlur).toHaveBeenCalledWith(event)
      })
    })
  })
})
