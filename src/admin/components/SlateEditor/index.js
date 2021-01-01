import React, { useCallback, useMemo, useState } from 'react'

import { Editable, withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'

import { Toolbar } from './components'
import { initialstate, serializeValueToHtml } from './utils'
import { onKeyDown } from './helpers'
import { withImages, withLinks, withEmbeds } from './plugins'
import { Element, Leaf } from './renderers'
import { SlateEditorWrapper, SlateWrapper } from './styles'

// eslint-disable-next-line react/prop-types
const SlateEditor = ({ initialValue, onChange }) => {

  let parsedValue;
  try {
    parsedValue = JSON.parse(initialValue)
  } catch (e) {
    parsedValue = initialstate;
  }

  const [value, setValue] = useState(parsedValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withImages(withLinks(withEmbeds(withHistory(withReact(createEditor()))))), [])
  const setUpdatedValue = value => {
    // serializeValueToHtml(value);
    setValue(value)
    onChange(JSON.stringify(value));
  }

  return (
    <SlateEditorWrapper>
      <SlateWrapper>
        <Slate editor={editor} value={value} onChange={value => setUpdatedValue(value)}>
          <Toolbar />
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder=""
            spellCheck={true}
            autoFocus={false}
            className="slate-editor"
            onKeyDown={onKeyDown}
          />
        </Slate>
      </SlateWrapper>
    </SlateEditorWrapper>
  )
}

export default SlateEditor