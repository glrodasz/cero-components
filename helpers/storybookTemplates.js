/* eslint-disable react/display-name, react/jsx-key */
import React from 'react'

export const getTemplate = (Component) => (args) => <Component {...args} />

export const getListTemplate = (Component) => ({ items, ...args }) =>
  items.map((item) => <Component {...args} {...item} />)
