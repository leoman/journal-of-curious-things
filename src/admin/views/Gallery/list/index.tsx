import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'

import {
  GridList,
  GridListTile,
} from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar'
import { SortableContainer as sortableContainer, SortableElement as sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import { GalleryImagesActionCreators } from '../../../../redux/actions/galleryImage';

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Toolbar from '../../../components/Toolbar'

import { PhotosWrapper, ImageOverlayHover } from './styles'

const SortableItem = sortableElement(({children}) => <GridListTile>{children}</GridListTile>)

const SortableContainer = sortableContainer(({children}) => <GridList cols={1} cellHeight={200}>{children}</GridList>)

const GalleryImagesList = () => {
  const dispatch = useDispatch()

  const [images, setImages] = useState([
    {
      id: 1,
      url: 'https://live.staticflickr.com/65535/49578525526_7956c61260_b.jpg',
    },
    {
      id: 2,
      url: 'https://live.staticflickr.com/65535/49578018978_201ffc09e2_b.jpg',
    },
    {
      id: 3,
      url: 'https://live.staticflickr.com/65535/49578522571_7b1cab5c9f_b.jpg',
    },
    {
      id: 4,
      url: 'https://live.staticflickr.com/65535/49578516676_5b6a6c5ae9_b.jpg',
    },
    {
      id: 5,
      url:
        'https://live.staticflickr.com/65535/49578004613_4dc7f55681_b.jpg',
    },
    {
      id: 6,
      url: 'https://live.staticflickr.com/65535/49586866968_b6ee2005af_b.jpg',
    },
    {
      id: 7,
      url: 'https://live.staticflickr.com/65535/49586861873_eb8f02815c_b.jpg',
    },
  ])

  const { galleryImages, loading, loaded, galleryImageError } = useSelector(
    (state: any) => state.GalleryImageReducer,
  );

  const getGalleryImageData = useCallback(() => {
    const { getGalleryImages } = GalleryImagesActionCreators;
    dispatch(getGalleryImages());
  }, [dispatch]);

  const removeGalleryImage = useCallback((id) => {
    const { deleteGalleryImage } = GalleryImagesActionCreators;
    dispatch(deleteGalleryImage({ id }));
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !galleryImageError && !loaded) {
      getGalleryImageData();
    }
  }, [loading, loaded, getGalleryImageData, galleryImageError]);

  const onClickRemove = useCallback((id) => {
    if (window.confirm("Do you really want to delete this?")) {
      console.log(id)
    }
  }, [])

  const addGalleryImage = () => console.log('addGalleryImage')
  const editGalleryImage = (id: number) => console.log('editGalleryImage')
  const deleteGalleryImage = (id: number) => {
    const result = window.confirm("Are you sure you want to delete this galleryImage?");
    if (result) { removeGalleryImage(id) }
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
    setImages(arrayMove(images, oldIndex, newIndex));
  };

  if (!galleryImages) return null

  return (
    <Page>
      <Container maxWidth="lg">

        <Toolbar link={addGalleryImage} title={'Add GalleryImage'} />

        <Grid
          container
        >
          <Card style={{ width: '100%' }}>
            <CardHeader title="GalleryImages" />
            <Divider />
            <PerfectScrollbar>
              <Box minWidth={800}>

                <PhotosWrapper>
                  {/* <AddPhoto
                    addPhoto={addPhoto}
                  /> */}
                  {/* <SortableContainerWrapper cols={1} cellHeight={200}> */}
                    <SortableContainer onSortEnd={onSortEnd}>
                      {images.map((item, index) => (
                        <SortableItem key={item.url} index={index}>
                          <ImageOverlayHover onClick={() => onClickRemove(item.id)}>Delete?</ImageOverlayHover>
                          <img
                            srcSet={`${item.url}?w=200&h=200&fit=cover&auto=format 1x`}
                            alt={item.url}
                            onClick={() => onClickRemove(item.id)}
                          />
                        </SortableItem>
                      ))}
                    </SortableContainer>
                  {/* </SortableContainerWrapper> */}
                </PhotosWrapper>
              </Box>
              </PerfectScrollbar>
            </Card>
        </Grid>
      </Container>
    </Page>
  )
}

const WrappedGalleryImagesList = () => <Layout component={GalleryImagesList} />

export default WrappedGalleryImagesList