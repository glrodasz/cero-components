import React from 'react'
import NewIcon from '../../atoms/NewIcon'

export default {
  title: 'Atoms/NewIcon',
  component: NewIcon,
}

export const ArrowRight = () => (
  <>
    <NewIcon iconName="arrow-right" size="sm" />
    <NewIcon iconName="arrow-right" size="md" />
    <NewIcon iconName="arrow-right" size="lg" />
    <NewIcon iconName="arrow-right" size="xl" />
  </>
)
export const AngleDown = () => (
  <>
    <NewIcon iconName="angle-down" size="sm" />
    <NewIcon iconName="angle-down" size="md" />
    <NewIcon iconName="angle-down" size="lg" />
    <NewIcon iconName="angle-down" size="xl" />
  </>
)
export const HasBackground = () => (
  <>
    <NewIcon iconName="angle-down" size="sm" hasBackground />
    <NewIcon iconName="angle-down" size="md" hasBackground />
    <NewIcon iconName="angle-down" size="lg" hasBackground />
    <NewIcon iconName="angle-down" size="xl" hasBackground />
  </>
)
