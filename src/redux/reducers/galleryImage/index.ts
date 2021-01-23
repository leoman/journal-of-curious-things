import { GalleryImagesActionTypes } from '../../types';

export const initialState = {
  loading: false,
  loaded: false,
  galleryImages: [],
  galleryImageError: null,
};

export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case GalleryImagesActionTypes.GET_GALLERY_IMAGES_REQ: {
      return {
        ...state,
        loading: true,
        galleryImageError: null,
      };
    }
    case GalleryImagesActionTypes.GET_GALLERY_IMAGES_RES: {
      if (error) {
        console.log('error', error)
        return {
          ...state,
          loading: false,
          galleryImageError: error,
        };
      }
      return {
        ...state,
        loading: false,
        loaded: true,
        galleryImageError: null,
        galleryImages: [...payload],
      };
    }
    case GalleryImagesActionTypes.SET_GALLERY_IMAGES_RES: {
      return {
        ...state,
        galleryImage: {
          ...state.galleryImages,
          ...payload
        }
      };
    }
    default:
      return state;
  }
};
