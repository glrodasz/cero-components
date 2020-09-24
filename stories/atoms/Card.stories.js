import React from 'react'
import Card from '../../atoms/Card'

export default {
  title: 'Atoms/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = () => <Card>Default Card</Card>

export const Colors = () => (
  <>
    <Card color="default">Default Color</Card>
    <Card color="primary">Primary Color</Card>
    <Card color="secondary">Secondary Color</Card>
  </>
)

export const Sizes = () => (
  <>
    <Card size="sm">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Card>
    <Card size="md">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Card>
    <Card size="lg">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Card>
  </>
)
