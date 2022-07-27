import React from 'react'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

// TODO: Move this to a generic approach where it
// reads all the stories and works as Storyshoot
const createSnapshotFromStories = (componentName, stories) => {
  const composedStories = composeStories(stories)

  Object.entries(composedStories).forEach(([story, Component]) => {
    describe(`when '${componentName}' ${story} is mounted`, () => {
      it('should render', () => {
        const { asFragment } = render(<Component />)
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
}

export default createSnapshotFromStories
