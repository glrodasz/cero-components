import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import createSnapshotFromStories from '../../utils/testUtils/createSnapshotFromStories'

import * as stories from './Button.stories'

import Button from './Button'

describe('[ atoms / Button ]', () => {
  describe('#Button', () => {
    // Snapshots based on stories
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
})
