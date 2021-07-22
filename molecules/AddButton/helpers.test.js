import { shouldShowHelpText } from './helpers'

describe('[ Molecules / AddButton / Helpers ]', () => {
  describe('#shouldShowHelpText', () => {
    describe('when `isEditable`, `inputValue`, and `focusHelpText` exist', () => {
      it('should return `true`', () => {
        // Arrange
        const params = {
          isEditable: true,
          inputValue: true,
          focusHelpText: true,
        }

        // Act
        const result = shouldShowHelpText(params)
        const expected = true

        // Assert
        expect(result).toBe(expected)
      })
    })

    describe('when `isEditable`, `inputValue`, and `blurHelpText` exist', () => {
      it('should return `true`', () => {
        // Arrange
        const params = {
          isEditable: true,
          inputValue: true,
          blurHelpText: true,
        }

        // Act
        const result = shouldShowHelpText(params)
        const expected = true

        // Assert
        expect(result).toBe(expected)
      })
    })
  })
})
