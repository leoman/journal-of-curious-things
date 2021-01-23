import React, { useCallback } from 'react';
import {
  GridList,
  GridListTile,
} from '@material-ui/core';
import { ProductImages } from '../../../models/product';
import { PhotosWrapper, ImageOverlayHover } from './styles'
import AddPhoto from './AddPhoto'

interface PhotosI {
  show: boolean
  remove: (id: number, local: boolean) => void
  handleImages: (photo: string) => void
  images: ProductImages[]
}

const Photos = ({ show, images, remove, handleImages }: PhotosI) => {

  const onClick = useCallback((id, local) => {
    if (window.confirm("Do you really want to delete this?")) {
      remove(id, local)
    }
  }, [remove])

  const addPhoto = (photo) => handleImages(photo)

  if (!show) {
    return null
  }

  return (
    <PhotosWrapper>
      <AddPhoto
        addPhoto={addPhoto}
      />
      <GridList cols={1} cellHeight={200}>
        {images.map((item, i) => (
          <GridListTile key={item.url}>
              <ImageOverlayHover onClick={() => onClick(item.local ? i : item.id, item.local)}>Delete?</ImageOverlayHover>
              <img
                srcSet={`${item.url}?w=200&h=200&fit=cover&auto=format 1x`}
                alt={item.title}
                onClick={() => onClick(item.local ? i : item.id, item.local)}
              />
          </GridListTile>
        ))}
        </GridList>
    </PhotosWrapper>
  );
};

export default Photos
