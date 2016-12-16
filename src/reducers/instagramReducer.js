import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function instagramReducer(state = initialState.instagram, action) {
  switch (action.type) {
    case types.LOAD_INSTAGRAM_SUCCESS:
      return action.instagram;

    default:
      return state;
  }
}
