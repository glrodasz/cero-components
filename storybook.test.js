import './utils/testUtils/matchMediaMock'
import 'jest-specific-snapshot'

const glob = require('glob')
const path = require('path')
import React from 'react'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

const SNAPSHOTS_FOLDER = '__snapshots__'
const SNAPSHOT_EXT = '.js.snap'
const STORIES_GLOB = '{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)'

const getStoryPaths = (file) => {
  const resolvedFilePath = path.resolve(__dirname, file)
  const dirnamePath = path.dirname(resolvedFilePath)
  return { resolvedFilePath, dirnamePath }
}

const getStoriesModules = (globPath) => {
  try {
    return glob.sync(globPath).map((filePath) => ({
      module: require(getStoryPaths(filePath).resolvedFilePath),
      filePath,
    }))
  } catch (error) {
    console.error('Error reading story files using a glob pattern', error)
  }
}

const getComponentNameStoryFilePath = (filePath) => {
  return filePath.split('/').pop().split('.').shift()
}

const getSnapshotPath = (filePath) => {
  const { dirnamePath } = getStoryPaths(filePath)
  const componentName = getComponentNameStoryFilePath(filePath)

  return `${dirnamePath}/${SNAPSHOTS_FOLDER}/${componentName}${SNAPSHOT_EXT}`
}

const storiesModules = getStoriesModules(STORIES_GLOB)

describe('[ storybook ]', () => {
  storiesModules.forEach(({ module, filePath }) => {
    const { default: _default, ...stories } = module
    const composedStories = composeStories(stories)

    describe(`[ ${_default.title} ]`, () => {
      Object.entries(composedStories).forEach(([story, Component]) => {
        it(`should render ${story}`, () => {
          const { asFragment } = render(<Component {..._default.args} />)
          const snapshotPath = getSnapshotPath(filePath)

          expect(asFragment()).toMatchSpecificSnapshot(snapshotPath)
        })
      })
    })
  })
})
