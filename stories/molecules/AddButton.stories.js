import React from 'react'
import AddButton from '../../molecules/AddButton'

export default {
  title: 'Molecules/AddButton',
  component: AddButton,
}

export const Default = () => <AddButton>Toca para agregar la tarea</AddButton>

export const Types = () => (
  <>
    <AddButton type="primary">Toca para agregar la tarea</AddButton>
    <AddButton type="secondary">Toca para agregar la tarea</AddButton>
  </>
)

export const Editable = () => (
  <AddButton onAdd={alert} isEditable>
    Toca para agregar la tarea
  </AddButton>
)
