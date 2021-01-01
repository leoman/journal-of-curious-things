import React from 'react'
import { useSlate } from 'slate-react'
import Button from './button'
import Icon from './icon'
import { insertLineBreak, isBlockActive } from '../helpers'

export const LineBreakButton = ({ format, icon, ...props }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        insertLineBreak(editor)
      }}
      {...props}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

export default LineBreakButton