import React from 'react'

import 'minireset.css'
import '../styles/globals.css'
import '../styles/tokens.css'

const getStyles = (parameters) => ({
  display: 'flex',
  flexDirection: parameters.__sb?.fd || 'column',
  maxHeight: parameters.__sb?.mh || 'auto',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  height: '100%',
  gap: '10px 30px',
})

export const decorators = [
  (Story, { parameters }) => (
    <div style={getStyles(parameters)}>
      <Story />
    </div>
  ),
]

export const parameters = {
  argTypes: {
    styles: { table: { disable: true } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}
