import {all} from 'redux-saga/effects';
import contactSaga from './contact/contactSaga';

function* saga() {
  yield all([...contactSaga]);
}

export default saga;
