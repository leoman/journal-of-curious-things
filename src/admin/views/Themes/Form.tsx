import React, { useState, useCallback, useEffect } from 'react';
import {
  Button,
  CardContent,
  TextField,
} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import { ThemeI } from '../../../models/theme';

interface Props {
  onSubmit: (fields: ThemeI) => void
  onCancel: () => void
  theme?: ThemeI
}

// eslint-disable-next-line react/display-name
export default ({
  theme,
  onSubmit,
  onCancel,
}: Props) => {
  const {
    id: themeId,
    name: themeName,
  } = theme || {}
  
  const id = themeId || null;
  const [name, setName] = useState(themeName);

  const handleName = useCallback(({ target: { value } }) => setName(value), [setName])

  useEffect(() => {
    setName(themeName);
  }, [themeName])

  const handleSubmit = useCallback(() => onSubmit({ 
    id,
    name,
  }), [
    id,
    name,
    onSubmit
  ])

  return (
    <CardContent>
      <TextField
        fullWidth
        label="Name"
        margin="normal"
        name="name"
        onChange={handleName}
        type="text"
        value={name}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSubmit}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={onCancel}
      >
        Cancel
      </Button>
    </CardContent>
  );
}

