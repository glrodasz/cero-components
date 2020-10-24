import React from 'react'
import Token from '..'
import toKebabCase from '../../../utils/toKebabCase'
import { choices } from '../..'

export default {
  title: 'Tokens/Colors',
  component: Token.Color,
}

export const Default = () => (
  <Token.Color
    color={choices.color.brand.mediumPurple}
    label="var(--color-brand-medium-purple)"
    value={choices.color.brand.mediumPurple}
  />
)

function renderColorStory(color) {
  const keys = Object.keys(choices.color[color])
  return (
    <>
      {keys.map((key) => (
        <Token.Color
          key={key}
          label={`var(--color-${color}-${toKebabCase(key)})`}
          value={choices.color[color][key]}
        />
      ))}
    </>
  )
}

export const Brand = () => renderColorStory('brand')
export const Gray = () => renderColorStory('gray')
export const Red = () => renderColorStory('red')
export const Orange = () => renderColorStory('orange')
export const Yellow = () => renderColorStory('yellow')
export const Green = () => renderColorStory('green')
export const Teal = () => renderColorStory('teal')
export const Blue = () => renderColorStory('blue')
export const Indigo = () => renderColorStory('indigo')
export const Purple = () => renderColorStory('purple')
export const Pink = () => renderColorStory('pink')
