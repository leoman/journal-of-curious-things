import React, { useState, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { AddPhotoWrapper } from "./styles";

interface Props {
  addPhoto: (photo: string) => void;
}

const AddPhoto = ({ addPhoto }: Props) => {
  const [photo, setPhoto] = useState("");

  const onClick = useCallback(() => {
    addPhoto(photo);
    setPhoto("");
  }, [photo, addPhoto]);

  const handlePhoto = useCallback(({ target: { value } }) => setPhoto(value), [
    setPhoto,
  ]);

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

export default AddPhoto;
