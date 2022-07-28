import {
  createHandlerClick,
  createHandlerClose,
  createHandlerSecondaryAction,
} from './handlers'

jest.useFakeTimers()

describe('[ atoms / Modal / handlers ]', () => {
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
      it('should call `event.stopPropagation`', () => {
        // Arrange
        const stopPropagationMock = jest.fn()
        const event = {
          stopPropagation: stopPropagationMock,
        }

        // Act
        createHandlerClick()(event)

        // Assert
        expect(stopPropagationMock).toHaveBeenCalled()
      })
    })
  })

  describe('#createHandlerClose', () => {
    describe('when `createHandlerClose` is called', () => {
      it('should return a function', () => {
        // Arrange
        const params = {}

        // Act
        const result = typeof createHandlerClose(params)
        const expected = 'function'

        // Assert
        expect(result).toBe(expected)
      })
    })

    describe('when `createHandlerClose` returned function is called', () => {
      it('should call `setOnFadeOut` with `true`', () => {
        // Arrange
        const setOnFadeOutMock = jest.fn()
        const onClose = () => {}

        // Act
        createHandlerClose({ onClose, setOnFadeOut: setOnFadeOutMock })()

        // Assert
        expect(setOnFadeOutMock).toHaveBeenCalledWith(true)
      })

      it('should call `onClose` after `FADE_OUT_ANIMATION_TIME` is done', () => {
        // Arrange
        const setOnFadeOut = () => {}
        const onCloseMock = jest.fn()

        // Act
        createHandlerClose({ onClose: onCloseMock, setOnFadeOut })()
        jest.runAllTimers()

        // Assert
        expect(onCloseMock).toHaveBeenCalled()
      })
    })
  })

  describe('#createHandlerSecondaryAction', () => {
    describe('when `createHandlerSecondaryAction` is called', () => {
      it('should return a function', () => {
        // Arrange
        const params = {}

        // Act
        const result = typeof createHandlerSecondaryAction(params)
        const expected = 'function'

        // Assert
        expect(result).toBe(expected)
      })
    })
  })
})
