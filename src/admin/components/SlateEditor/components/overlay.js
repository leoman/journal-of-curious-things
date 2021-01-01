import React, { useState, useEffect } from 'react'
import {
  SlateEditorOverlay,
  Wrapper,
  Inner
} from './styles'

export const Overlay = ({ showOverlay, children }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(showOverlay)
  }, [showOverlay])

  return (
    <SlateEditorOverlay style={{display: visible ? 'block' : 'none'}}>
      <Wrapper>
        <Inner>
          <div>
            {children}
          </div>
        </Inner>
      </Wrapper>
    </SlateEditorOverlay>
  )
}

export default Overlay;