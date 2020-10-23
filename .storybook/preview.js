import React from 'react'

import 'minireset.css'
import '../styles/globals.css'
import '../styles/tokens.css'

export const decorators = [
  (Story) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Story />
    </div>
  ),
]

// FIXME: https://github.com/storybookjs/storybook/issues/12120
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
} 