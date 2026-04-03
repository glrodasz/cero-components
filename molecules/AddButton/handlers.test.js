import {
  handleClick,
  handleChange,
  handleKeyDown,
  handleBlur,
  handleFocus,
} from './handlers'

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

  describe('#handleChange', () => {
    describe('when the returned function is called', () => {
      it('should call `setInputValue` with the event value', () => {
        // Arrange
        const setInputValue = vi.fn()
        const setIsInvalid = vi.fn()
        const event = { currentTarget: { value: 'test' } }

        // Act
        handleChange({ setInputValue, setIsInvalid })(event)

        // Assert
        expect(setInputValue).toHaveBeenCalledWith('test')
      })

      it('should call `setIsInvalid` with `false`', () => {
        // Arrange
        const setInputValue = vi.fn()
        const setIsInvalid = vi.fn()
        const event = { currentTarget: { value: '' } }

        // Act
        handleChange({ setInputValue, setIsInvalid })(event)

        // Assert
        expect(setIsInvalid).toHaveBeenCalledWith(false)
      })
    })
  })

  describe('#handleKeyDown', () => {
    describe('when the Enter key is pressed', () => {
      it('should call `onAdd` with the current input value', () => {
        // Arrange
        const onAdd = vi.fn()
        const setIsEditable = vi.fn()
        const setInputValue = vi.fn()
        const setIsInvalid = vi.fn()
        const event = { key: 'Enter' }

        // Act
        handleKeyDown({
          onAdd,
          setIsEditable,
          setInputValue,
          setIsInvalid,
          inputValue: 'hello',
        })(event)

        // Assert
        expect(onAdd).toHaveBeenCalledWith({ value: 'hello' })
      })

      it('should call `setIsEditable` with `false`', () => {
        // Arrange
        const onAdd = vi.fn()
        const setIsEditable = vi.fn()
        const setInputValue = vi.fn()
        const setIsInvalid = vi.fn()
        const event = { key: 'Enter' }

        // Act
        handleKeyDown({
          onAdd,
          setIsEditable,
          setInputValue,
          setIsInvalid,
          inputValue: 'hello',
        })(event)

        // Assert
        expect(setIsEditable).toHaveBeenCalledWith(false)
      })
    })

    describe('when the Escape key is pressed', () => {
      it('should call `setIsEditable` with `false`', () => {
        // Arrange
        const onAdd = vi.fn()
        const setIsEditable = vi.fn()
        const setInputValue = vi.fn()
        const setIsInvalid = vi.fn()
        const event = { key: 'Escape' }

        // Act
        handleKeyDown({
          onAdd,
          setIsEditable,
          setInputValue,
          setIsInvalid,
          inputValue: '',
        })(event)

        // Assert
        expect(setIsEditable).toHaveBeenCalledWith(false)
      })

      it('should call `setIsInvalid` with `false`', () => {
        // Arrange
        const onAdd = vi.fn()
        const setIsEditable = vi.fn()
        const setInputValue = vi.fn()
        const setIsInvalid = vi.fn()
        const event = { key: 'Escape' }

        // Act
        handleKeyDown({
          onAdd,
          setIsEditable,
          setInputValue,
          setIsInvalid,
          inputValue: '',
        })(event)

        // Assert
        expect(setIsInvalid).toHaveBeenCalledWith(false)
      })
    })
  })

  describe('#handleBlur', () => {
    describe('when the returned function is called', () => {
      it('should call `setIsFocused` with `false`', () => {
        // Arrange
        const setIsEditable = vi.fn()
        const setIsFocused = vi.fn()
        const setIsInvalid = vi.fn()

        // Act
        handleBlur({
          inputValue: 'text',
          setIsEditable,
          setIsFocused,
          setIsInvalid,
        })()

        // Assert
        expect(setIsFocused).toHaveBeenCalledWith(false)
      })

      it('should call `setIsEditable` with `false` when `inputValue` is empty', () => {
        // Arrange
        const setIsEditable = vi.fn()
        const setIsFocused = vi.fn()
        const setIsInvalid = vi.fn()

        // Act
        handleBlur({
          inputValue: '',
          setIsEditable,
          setIsFocused,
          setIsInvalid,
        })()

        // Assert
        expect(setIsEditable).toHaveBeenCalledWith(false)
      })
    })
  })

  describe('#handleFocus', () => {
    describe('when the returned function is called', () => {
      it('should call `setIsFocused` with `true`', () => {
        // Arrange
        const setIsFocused = vi.fn()
        const event = { currentTarget: { select: vi.fn() } }

        // Act
        handleFocus({ setIsFocused })(event)

        // Assert
        expect(setIsFocused).toHaveBeenCalledWith(true)
      })

      it('should call `event.currentTarget.select`', () => {
        // Arrange
        const setIsFocused = vi.fn()
        const selectMock = vi.fn()
        const event = { currentTarget: { select: selectMock } }

        // Act
        handleFocus({ setIsFocused })(event)

        // Assert
        expect(selectMock).toHaveBeenCalled()
      })
    })
  })
})
