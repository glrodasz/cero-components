import React from 'react'
import Paragraph from '../../atoms/Paragraph'

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
}

export const Default = () => <Paragraph>Hello Paragraph</Paragraph>

export const Colors = () => (
  <>
    <Paragraph color="default">Default Color</Paragraph>
    <Paragraph color="muted">Primary Color</Paragraph>
  </>
)

export const Sizes = () => (
  <>
    <Paragraph size="sm">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Paragraph>
    <Paragraph size="md">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Paragraph>
    <Paragraph size="lg">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Paragraph>
  </>
)

export const Weights = () => (
  <>
    <Paragraph weight="normal">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Paragraph>
    <Paragraph weight="medium">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Paragraph>
  </>
)
