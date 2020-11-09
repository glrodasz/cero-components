/* eslint-disable react/display-name, react/jsx-key */
import React from 'react'
import { getClasses } from './styles'

export const getTemplate = (Component, styles) => (args) => (
  <Component {...args} getStyles={getClasses(styles)(args)} />
)

export const getListTemplate = (Component, styles) => ({ items, ...args }) =>
  items.map((item, index) => (
    <Component
      key={index}
      {...args}
      {...item}
      getStyles={getClasses(styles)({ ...args, ...item })}
    />
  ))

export const getOptionsArgTypes = (options) => ({
  description: '**options:**',
  table: {
    type: { summary: options.map((option) => `'${option}'`).join('|') },
  },
  control: { type: 'select', options },
})
