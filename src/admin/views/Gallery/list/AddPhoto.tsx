import React, { useState, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { AddPhotoWrapper } from "./styles";

interface Props {
  show: boolean
  addPhoto: (photo: object) => void
}

const defaultPhotoValue = ''

const newImage = (value) => ({
  url: value, local: true
})

const AddPhoto = ({ show, addPhoto }: Props) => {
  const [photo, setPhoto] = useState<string>(defaultPhotoValue);

  const onClick = useCallback(() => {
    addPhoto(newImage(photo));
    setPhoto(defaultPhotoValue);
  }, [photo, addPhoto]);

  const handlePhoto = useCallback(({ target: { value } }) => setPhoto(value), [
    setPhoto,
  ])

  if (!show) {
    return null
  }

  return (
    <AddPhotoWrapper>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onClick}
        startIcon={<SaveIcon />}
      >
        Add new Image
      </Button>
      <TextField
        fullWidth
        label="Image"
        margin="normal"
        name="Image"
        onChange={handlePhoto}
        type="text"
        value={photo}
        variant="outlined"
      />
    </AddPhotoWrapper>
  );
};

export default AddPhoto
