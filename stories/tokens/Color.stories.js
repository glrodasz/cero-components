import React from 'react'
import Token from '../../tokens/Token'
import kebabCase from '../../utils/kebabCase'
import { choices } from '../../tokens'

export default {
  title: 'Tokens/Colors',
  component: Token.Color,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = () => (
  <Token.Color
    color={choices.color.brand.mediumPurple}
    label="var(--color-brand-medium-purple)"
    value={choices.color.brand.mediumPurple}
  />
)

export const Brand = () => {
  const keys = Object.keys(choices.color.brand)
  return (
    <>
      {keys.map((key) => (
        <Token.Color
          key={key}
          label={`var(--color-brand-${kebabCase(key)})`}
          value={choices.color.brand[key]}
        />
      ))}
    </>
  )
}

export const Red = () => {
  const keys = Object.keys(choices.color.red)
  return (
    <>
      {keys.map((key) => (
        <Token.Color
          key={key}
          label={`var(--color-red-${kebabCase(key)})`}
          value={choices.color.red[key]}
        />
      ))}
    </>
  )
}
