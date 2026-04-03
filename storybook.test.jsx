import './utils/testUtils/matchMediaMock'
import { expect, describe, it } from 'vitest'
import React from 'react'
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'

const storyModules = import.meta.glob(
  './{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)',
  { eager: true }
)

describe('[ storybook ]', () => {
  Object.entries(storyModules).forEach(([filePath, module]) => {
    const composedStories = composeStories(module)
    const { default: defaultExport } = module

    if (!defaultExport) {
      console.warn(`No default export found in ${filePath}`)
      return
    }

    describe(`[ ${defaultExport.title} ]`, () => {
      Object.entries(composedStories).forEach(([story, Component]) => {
        it(`should render ${story}`, () => {
          const { asFragment } = render(<Component {...defaultExport.args} />)
          expect(asFragment()).toMatchSnapshot()
        })
      })
    })
  })
})
