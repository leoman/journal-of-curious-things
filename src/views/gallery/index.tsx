import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout"
import { GalleryImagesActionCreators } from "../../redux/actions/galleryImage";
import { GalleryWrapper, Figure, FigureCaption, Img } from './styles'
import Loading from "../../components/loading";

const valueBetween = () => Math.floor(Math.random() * (10 - -10 + 1)) + -10

const GalleryComp = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  const { galleryImages, loading, loaded, galleryImageError } = useSelector(
    (state: any) => state.GalleryImageReducer
  );

  const getGalleryImageData = useCallback(() => {
    const { getGalleryImages } = GalleryImagesActionCreators;
    dispatch(getGalleryImages());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !galleryImageError && !loaded) {
      getGalleryImageData();
    }
  }, [loading, loaded, getGalleryImageData, galleryImageError]);

  useEffect(() => {
    setImages(galleryImages)
  }, [galleryImages]);

  if (loading) return <Loading />

  return (
    <GalleryWrapper>
      {images.map((image, i) => (
        <Figure key={i} deg={valueBetween()}>
          <Img src={image.url} alt="" />
          {image.title && <FigureCaption>{image.title}</FigureCaption>}
        </Figure>
      ))}
    </GalleryWrapper>
  )
}

const Gallery = () => <Layout component={GalleryComp} />

export default Gallery;