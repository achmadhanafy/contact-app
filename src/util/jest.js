import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import {generalReducer} from '../redux/general/generalReducer';
import {contactReducer} from '../redux/contact/contactReducer';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

export const storeMock = mockStore({
  general: generalReducer,
  contact: contactReducer,
});
