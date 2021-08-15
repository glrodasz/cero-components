import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import Button from './Button'

describe('[ atoms / Button ]', () => {
  describe('when `Button`is clicked', () => {
    it('should call `onClick`', () => {
      // Arrange
      const onClickMock = jest.fn()
      const props = {
        onClick: onClickMock,
      }

      // Act
      render(<Button {...props}>Button</Button>)
      fireEvent.click(screen.getByText('Button'))

      // Assert
      expect(onClickMock).toHaveBeenCalled()
    })
  })
})
