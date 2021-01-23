import { GalleryImagesActionTypes } from '../../types';
import JournalAPI, { methods } from '../JournalAPI';

const SERVICE = 'dev';

export const GalleryImagesActionCreators = {
  getGalleryImages: () => async (dispatch) => {
    dispatch({
      type: GalleryImagesActionTypes.GET_GALLERY_IMAGES_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.GET, 'themes');
      dispatch({
        type: GalleryImagesActionTypes.GET_GALLERY_IMAGES_RES,
        payload: response.data.result || [],
      });
    } catch (e) {
      console.error('Error - getGalleryImages:', e);
      dispatch({
        type: GalleryImagesActionTypes.GET_GALLERY_IMAGES_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  addGalleryImage: (data) => async (dispatch) => {
    dispatch({
      type: GalleryImagesActionTypes.CREATE_GALLERY_IMAGES_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.POST, 'theme', data);
      dispatch({
        type: GalleryImagesActionTypes.CREATE_GALLERY_IMAGES_RES,
        payload: response.data.result || [],
      });
      dispatch(GalleryImagesActionCreators.getGalleryImages())
    } catch (e) {
      console.error('Error - addGalleryImage:', e);
      dispatch({
        type: GalleryImagesActionTypes.CREATE_GALLERY_IMAGES_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  editGalleryImage: (data) => async (dispatch) => {
    dispatch({
      type: GalleryImagesActionTypes.EDIT_GALLERY_IMAGES_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.PATCH, 'theme', data);
      dispatch({
        type: GalleryImagesActionTypes.EDIT_GALLERY_IMAGES_RES,
        payload: response.data.result || [],
      });
      dispatch(GalleryImagesActionCreators.getGalleryImages())
    } catch (e) {
      console.error('Error - editGalleryImage:', e);
      dispatch({
        type: GalleryImagesActionTypes.EDIT_GALLERY_IMAGES_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
  deleteGalleryImage: (data) => async (dispatch) => {
    dispatch({
      type: GalleryImagesActionTypes.DELETE_GALLERY_IMAGES_REQ,
    });
    try {
      const response: any = await JournalAPI(SERVICE, methods.DELETE, 'theme', data);
      dispatch({
        type: GalleryImagesActionTypes.DELETE_GALLERY_IMAGES_RES,
        payload: response.data.success || [],
      });
      dispatch(GalleryImagesActionCreators.getGalleryImages())
    } catch (e) {
      console.error('Error - deleteGalleryImage:', e);
      dispatch({
        type: GalleryImagesActionTypes.DELETE_GALLERY_IMAGES_RES,
        error: e.data ? e.data.message : 'Something went wrong',
      });
    }
  },
};
