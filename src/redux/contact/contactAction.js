import * as CONST from './contactConstant';

export const getContacts = payload => ({
  type: CONST.GET_CONTACTS,
  payload,
});
export const getContactsSucess = payload => ({
  type: CONST.GET_CONTACTS_SUCCESS,
  payload,
});
export const getContactsError = payload => ({
  type: CONST.GET_CONTACTS_ERROR,
  payload,
});
export const getContactsClear = payload => ({
  type: CONST.GET_CONTACTS_CLEAR,
  payload,
});

export const setContact = payload => ({
  type: CONST.SET_CONTACT,
  payload,
});
export const setContactSucess = payload => ({
  type: CONST.SET_CONTACT_SUCCESS,
  payload,
});
export const setContactError = payload => ({
  type: CONST.SET_CONTACT_ERROR,
  payload,
});
export const setContactClear = payload => ({
  type: CONST.SET_CONTACT_CLEAR,
  payload,
});

export const delContact = payload => ({
  type: CONST.DEL_CONTACT,
  payload,
});
export const delContactSucess = payload => ({
  type: CONST.DEL_CONTACT_SUCCESS,
  payload,
});
export const delContactError = payload => ({
  type: CONST.DEL_CONTACT_ERROR,
  payload,
});
export const delContactClear = payload => ({
  type: CONST.DEL_CONTACT_CLEAR,
  payload,
});

export const getContact = payload => ({
  type: CONST.GET_CONTACT,
  payload,
});
export const getContactSucess = payload => ({
  type: CONST.GET_CONTACT_SUCCESS,
  payload,
});
export const getContactError = payload => ({
  type: CONST.GET_CONTACT_ERROR,
  payload,
});
export const getContactClear = payload => ({
  type: CONST.GET_CONTACT_CLEAR,
  payload,
});

export const putContact = payload => ({
  type: CONST.PUT_CONTACT,
  payload,
});
export const putContactSucess = payload => ({
  type: CONST.PUT_CONTACT_SUCCESS,
  payload,
});
export const putContactError = payload => ({
  type: CONST.PUT_CONTACT_ERROR,
  payload,
});
export const putContactClear = payload => ({
  type: CONST.PUT_CONTACT_CLEAR,
  payload,
});
