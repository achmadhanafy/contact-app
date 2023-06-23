import {combineReducers} from 'redux';
import {generalReducer} from './general/generalReducer';
import { contactReducer } from './contact/contactReducer';

export const reducer = combineReducers({
  general: generalReducer,
  contact: contactReducer,
});
