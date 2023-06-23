import {
  delContactError,
  delContactSucess,
  getContactError,
  getContactSucess,
  getContactsError,
  getContactsSucess,
  putContactError,
  putContactSucess,
  setContactError,
  setContactSucess,
} from './contactAction';
import {
  delContactApi,
  getContactApi,
  getContactsApi,
  putContactApi,
  setContactApi,
} from './contactApi';
import * as CONST from './contactConstant';
import {call, put, takeLatest} from 'redux-saga/effects';

function* getContacts(params) {
  try {
    const response = yield call(getContactsApi, params.payload);
    yield put(getContactsSucess(response?.data));
  } catch (error) {
    yield put(getContactsError(error?.response?.data));
  }
}

function* setContact(params) {
  try {
    const response = yield call(setContactApi, params.payload);
    yield put(setContactSucess(response?.data));
  } catch (error) {
    yield put(setContactError(error?.response?.data));
  }
}

function* delContact(params) {
  try {
    const response = yield call(delContactApi, params.payload);
    yield put(delContactSucess(response?.data));
  } catch (error) {
    yield put(delContactError(error?.response?.data));
  }
}

function* getContact(params) {
  try {
    const response = yield call(getContactApi, params.payload);
    yield put(getContactSucess(response?.data));
  } catch (error) {
    yield put(getContactError(error?.response?.data));
  }
}

function* putContact(params) {
  try {
    const response = yield call(putContactApi, params.payload);
    yield put(putContactSucess(response?.data));
  } catch (error) {
    yield put(putContactError(error?.response?.data));
  }
}

const contactSaga = [
  takeLatest(CONST.GET_CONTACTS, getContacts),
  takeLatest(CONST.SET_CONTACT, setContact),
  takeLatest(CONST.DEL_CONTACT, delContact),
  takeLatest(CONST.GET_CONTACT, getContact),
  takeLatest(CONST.PUT_CONTACT, putContact),
];

export default contactSaga;
