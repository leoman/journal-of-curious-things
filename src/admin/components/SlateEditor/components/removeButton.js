import React from 'react'
import { useSlate } from 'slate-react'
import Button from './button'
import Icon from './icon'
import { isBlockActive, removeElement } from '../helpers'

export const RemoveButton = ({ format, icon, ...props }) => {
  const editor = useSlate()

  const { selection } = editor

  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        console.log(selection);
        removeElement(editor, selection)
      }}
      {...props}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

export default RemoveButton