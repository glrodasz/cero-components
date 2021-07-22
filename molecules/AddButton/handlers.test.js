import { handleClick } from './handlers'

describe('[ Molecules / AddButton / Handlers ]', () => {
  describe('#handleClick', () => {
    describe('when the handler is call', () => {
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
  })
})
