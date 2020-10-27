import React from 'react'

import 'minireset.css'
import '../styles/globals.css'
import '../styles/tokens.css'

const getStyles = (args) => ({
  display: 'flex',
  flexDirection: args.__sb?.fd || 'column',
  maxHeight: args.__sb?.mh || 'auto',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  height: '100%',
  gap: '10px 30px',
})

export const decorators = [
  (Story, { args }) => (
    <div style={getStyles(args)}>
      <Story />
    </div>
  ),
]

export const parameters = {
  argTypes: { __sb: { table: { disable: true } } },
  actions: { argTypesRegex: '^on[A-Z].*' },
}
