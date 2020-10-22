import React from 'react'
import Heading from '../../atoms/Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
}

export const Default = () => <Heading>Default Heading</Heading>

export const Colors = () => (
  <>
    <Heading color="default">Default Color</Heading>
    <Heading color="primary">Primary Color</Heading>
  </>
)

export const Sizes = () => (
  <>
    <Heading size="xs">La cucaracha ya no quiere caminar.</Heading>
    <Heading size="sm">La cucaracha ya no quiere caminar.</Heading>
    <Heading size="md">La cucaracha ya no quiere caminar.</Heading>
    <Heading size="lg">La cucaracha ya no quiere caminar.</Heading>
    <Heading size="xl">La cucaracha ya no quiere caminar.</Heading>
    <Heading size="2xl">La cucaracha ya no quiere caminar.</Heading>
  </>
)
