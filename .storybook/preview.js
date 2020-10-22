import React from 'react'

import 'minireset.css'
import '../styles/globals.css'
import '../styles/tokens.css'

export const decorators = [
  (Story) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Story />
    </div>
  ),
]
