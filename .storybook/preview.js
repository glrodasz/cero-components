import React from 'react'

import 'minireset.css'
import '../styles/globals.css'
import '../styles/tokens.css'

export const decorators = [
  (Story, { args }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: args.__sb?.fd || 'column',
        maxHeight: args.__sb?.mh || 'auto',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        height: '100%',
        gap: '10px 30px',
      }}
    >
      <Story />
    </div>
  ),
]

export const parameters = {
  argTypes: {
    __sb: {
      control: null,
      table: {
        type: {
          summary: 'Ignore this prop',
          detail: 'Only for Storybook decorator usage',
        },
      },
    },
    onClick: { defaultValue: null },
    onChange: { defaultValue: null },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}
