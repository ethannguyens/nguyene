import InstagramApi from '../api/instagramApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadInstagramSuccess(photos) {
  return {type: types.LOAD_INSTAGRAM_SUCCESS, photos};
}

export function loadInstagram() {
  return dispatch => {
    dispatch(beginAjaxCall());

    return InstagramApi.getRecentPhotos((photos) => {
      dispatch(loadInstagramSuccess(photos));
    });
  };
}
