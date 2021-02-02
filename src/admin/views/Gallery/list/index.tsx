import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { GridList } from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
} from "react-sortable-hoc";
import arrayMove from "array-move";

import AddPhoto from './AddPhoto'

import { GalleryImagesActionCreators } from "../../../../redux/actions/galleryImage";

import Layout from "../../Layout";
import Page from "../../../components/Page";
import Toolbar from "../../../components/Toolbar";

import { PhotosWrapper, ImageOverlayHover, SortableElementWrapper } from "./styles";


// const fakeImages = [
//   {
//     local: true,
//     url: "https://live.staticflickr.com/65535/49578525526_7956c61260_b.jpg",
//   },
//   {
//     local: true,
//     url: "https://live.staticflickr.com/65535/49578018978_201ffc09e2_b.jpg",
//   },
//   {
//     local: true,
//     url: "https://live.staticflickr.com/65535/49578522571_7b1cab5c9f_b.jpg",
//   },
//   {
//     local: true,
//     url: "https://live.staticflickr.com/65535/49578516676_5b6a6c5ae9_b.jpg",
//   },
//   {
//     local: true,
//     url: "https://live.staticflickr.com/65535/49578004613_4dc7f55681_b.jpg",
//   },
//   {
//     local: true,
//     url: "https://live.staticflickr.com/65535/49586866968_b6ee2005af_b.jpg",
//   },
//   {
//     local: true,
//     url: "https://live.staticflickr.com/65535/49586861873_eb8f02815c_b.jpg",
//   },
// ]

const SortableItem = sortableElement(({ children }) => (
  <SortableElementWrapper>{children}</SortableElementWrapper>
));

const SortableContainer = sortableContainer(({ children }) => (
  <GridList cols={1} cellHeight={200}>
    {children}
  </GridList>
));

const GalleryImagesList = () => {
  const dispatch = useDispatch();
  const [showAddPhoto, setShowAddPhoto] = useState<boolean>(false);
  const [images, setImages] = useState([]);

  const { galleryImages, loading, loaded, galleryImageError } = useSelector(
    (state: any) => state.GalleryImageReducer
  );

  const getGalleryImageData = useCallback(() => {
    const { getGalleryImages } = GalleryImagesActionCreators;
    dispatch(getGalleryImages());
  }, [dispatch]);

  const removeGalleryImage = useCallback(
    (id) => {
      const { deleteGalleryImage } = GalleryImagesActionCreators;
      dispatch(deleteGalleryImage({ id }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!loading && !galleryImageError && !loaded) {
      getGalleryImageData();
    }
  }, [loading, loaded, getGalleryImageData, galleryImageError]);

  useEffect(() => {
    setImages(galleryImages)
  }, [galleryImages]);

  const removeLocalImage = useCallback((photo) => setImages(images.filter(image => image !== photo)), [images])

  const onClickRemove = useCallback((image) => {
    if (window.confirm("Do you really want to delete this?")) {
      if(image.local) {
        removeLocalImage(image)
      } else {
        removeGalleryImage(image.id)
      }
    }
  }, [removeLocalImage, removeGalleryImage]);

  const showAddPhotoComp = () => setShowAddPhoto(true)

  const addGalleryImage = (image) => {
    setImages([image, ...images])
    setShowAddPhoto(false)
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setImages(arrayMove(images, oldIndex, newIndex));
  };

  const onSaveImages = useCallback(
    () => {
      console.log(images);
      const { addGalleryImages } = GalleryImagesActionCreators;
      dispatch(addGalleryImages({ images }));
    },
    [dispatch, images]
  );

  if (!images) return null;

  return (
    <Page>
      <Container maxWidth="lg">
        <Toolbar link={showAddPhotoComp} title={"Add new Gallery Image"} />

        <Grid container>
          <Card style={{ width: "100%" }}>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onSaveImages}
            startIcon={<SaveIcon />}
          >
            Save Images
          </Button>

            <CardHeader title="GalleryImages" />
            <Divider />
            <PerfectScrollbar>
              <Box minWidth={800}>
                <PhotosWrapper>
                  <AddPhoto
                    show={showAddPhoto}
                    addPhoto={addGalleryImage}
                  />
                  <SortableContainer onSortEnd={onSortEnd}>
                    {images.map((item, index) => (
                      <SortableItem key={item.url} index={index}>
                        <ImageOverlayHover
                          onClick={() => onClickRemove(item)}
                        >
                          Delete?
                        </ImageOverlayHover>
                        <img
                          srcSet={`${item.url}?w=200&h=200&fit=cover&auto=format 1x`}
                          alt={item.url}
                          onClick={() => onClickRemove(item)}
                        />
                      </SortableItem>
                    ))}
                  </SortableContainer>
                </PhotosWrapper>
              </Box>
            </PerfectScrollbar>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
};

const WrappedGalleryImagesList = () => <Layout component={GalleryImagesList} />;

export default WrappedGalleryImagesList;
