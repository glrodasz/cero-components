import isEmpty from './isEmpty'

describe('[ utils / isEmpty ]', () => {
  describe('when the `param` is an empty object', () => {
    it('should return `true`', () => {
      // Arrange
      const param = {}

      // Act
      const result = isEmpty(param)
      const expected = true

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('when the `param` is `Object.create({})`', () => {
    it('should return `true`', () => {
      // Arrange
      const param = Object.create({})

      // Act
      const result = isEmpty(param)
      const expected = true

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('when the `param` is an empty array', () => {
    it('should return `true`', () => {
      // Arrange
      const param = []

      // Act
      const result = isEmpty(param)
      const expected = true

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('when the `param` is an empty string', () => {
    it('should return `true`', () => {
      // Arrange
      const param = ''

      // Act
      const result = isEmpty(param)
      const expected = true

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('when the `param` is NOT an empty object', () => {
    it('should return `false`', () => {
      // Arrange
      const param = { foo: 'bar' }

      // Act
      const result = isEmpty(param)
      const expected = false

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('when the `param` is NOT an empty array', () => {
    it('should return `false`', () => {
      // Arrange
      const param = ['foo', 'bar']

      // Act
      const result = isEmpty(param)
      const expected = false

      // Assert
      expect(result).toBe(expected)
    })
  })

  describe('when the `param` is NOT an empty string', () => {
    it('should return `false`', () => {
      // Arrange
      const param = 'foo'

      // Act
      const result = isEmpty(param)
      const expected = false

      // Assert
      expect(result).toBe(expected)
    })
  })

  const NOT_EMPTIABLE_VALUES = [
    [42],
    [null],
    [undefined],
    [Symbol()],
    [true],
    [10n],
    [() => {}],
  ]

  describe('when the params are NOT emptiable', () => {
    it.each(NOT_EMPTIABLE_VALUES)(
      'should trhow an error for param `%s`',
      (param) => {
        // Act
        const result = () => isEmpty(param)
        const expected = 'The value is not an object, an array or a string'

        // Assert
        expect(result).toThrow(expected)
      }
    )
  })
})
