import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

import * as stories from './Button.stories'

import Button, { handleClick } from './Button'

describe('[ atoms / Button ]', () => {
  describe('#Button', () => {
    createSnapshotFromStories('Button', stories)

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

  describe('#handleClick', () => {
    // Given, When, Then
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
