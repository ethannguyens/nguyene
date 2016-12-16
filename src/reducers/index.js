import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import instagram from './instagramReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  instagram,
  ajaxCallsInProgress
});

export default rootReducer;
