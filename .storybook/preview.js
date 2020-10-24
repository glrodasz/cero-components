import React from 'react'

import 'minireset.css'
import '../styles/globals.css'
import '../styles/tokens.css'

export const decorators = [
  (Story, { args }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: args.__sbfd || 'column',
        gap: '10px',
        height: '100%',
      }}
    >
      <Story />
    </div>
  ),
]

export const parameters = {
  argTypes: {
    __sbfd: {
      control: null,
      table: {
        type: {
          summary: 'Ignore this prop',
          detail: 'Only for Storybook decorator usage',
        },
      },
    },
  },
  // FIXME: https://github.com/storybookjs/storybook/issues/12120
  actions: { argTypesRegex: '^on[A-Z].*' },
}
