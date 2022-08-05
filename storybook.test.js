import './utils/testUtils/matchMediaMock'
import 'jest-specific-snapshot'

const glob = require('glob')
const path = require('path')
import React from 'react'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

let storiesModules = []

try {
  storiesModules = glob
    .sync('{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)')
    .map((file) => ({ module: require(path.join(__dirname, file)), file }))
} catch (error) {
  console.error('Error reading story files using a glob pattern', error)
}

describe('[ storybook ]', () => {
  storiesModules.forEach(({ module, file }) => {
    const { default: _default, ...stories } = module
    const composedStories = composeStories(stories)
    const storyTitle = _default.title

    describe(`[ ${storyTitle} ]`, () => {
      Object.entries(composedStories).forEach(([story, Component]) => {
        it(`should render ${story}`, () => {
          const filePath = path.resolve(process.cwd(), file)
          const dirnamePath = path.dirname(filePath)
          const componentName = file.split('/').pop().split('.').shift()

          const { asFragment } = render(<Component {..._default.args} />)
          expect(asFragment()).toMatchSpecificSnapshot(
            `${dirnamePath}/__snapshots__/${componentName}.js.snap`
          )
        })
      })
    })
  })
})
