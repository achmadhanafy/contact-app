import {
  getContactsInitialState,
  delContactInitialState,
  getContactInitialState,
  putContactInitialState,
  setContactInitialState,
} from './contactInitialState';
import * as CONST from './contactConstant';

const contactInitialState = {
  ...getContactsInitialState,
  ...setContactInitialState,
  ...delContactInitialState,
  ...getContactInitialState,
  ...putContactInitialState,
  action: '',
};

export const contactReducer = (state = contactInitialState, action) => {
  const {payload, type} = action;
  const actions = {
    [CONST.GET_CONTACTS]: () => ({
      ...state,
      getContactsParam: payload,
      getContactsFetch: true,
      action: type,
    }),
    [CONST.GET_CONTACTS_SUCCESS]: () => ({
      ...state,
      getContactsResponse: payload,
      getContactsError: getContactsInitialState.getContactsError,
      getContactsFetch: false,
      action: type,
    }),
    [CONST.GET_CONTACTS_ERROR]: () => ({
      ...state,
      getContactsError: payload,
      getContactsResponse: getContactsInitialState.getContactsResponse,
      getContactsFetch: false,
      action: type,
    }),
    [CONST.GET_CONTACTS_CLEAR]: () => ({
      ...state,
      ...getContactsInitialState,
      action: type,
    }),

    [CONST.SET_CONTACT]: () => ({
      ...state,
      setContactParam: payload,
      setContactFetch: true,
      action: type,
    }),
    [CONST.SET_CONTACT_SUCCESS]: () => ({
      ...state,
      setContactResponse: payload,
      setContactError: setContactInitialState.setContactError,
      setContactFetch: false,
      action: type,
    }),
    [CONST.SET_CONTACT_ERROR]: () => ({
      ...state,
      setContactError: payload,
      setContactResponse: setContactInitialState.setContactResponse,
      setContactFetch: false,
      action: type,
    }),
    [CONST.SET_CONTACT_CLEAR]: () => ({
      ...state,
      ...setContactInitialState,
      action: type,
    }),

    [CONST.DEL_CONTACT]: () => ({
      ...state,
      delContactParam: payload,
      delContactFetch: true,
      action: type,
    }),
    [CONST.DEL_CONTACT_SUCCESS]: () => ({
      ...state,
      delContactResponse: payload,
      delContactError: delContactInitialState.delContactError,
      delContactFetch: false,
      action: type,
    }),
    [CONST.DEL_CONTACT_ERROR]: () => ({
      ...state,
      delContactError: payload,
      delContactResponse: delContactInitialState.delContactResponse,
      delContactFetch: false,
      action: type,
    }),
    [CONST.DEL_CONTACT_CLEAR]: () => ({
      ...state,
      ...delContactInitialState,
      action: type,
    }),

    [CONST.GET_CONTACT]: () => ({
      ...state,
      getContactParam: payload,
      getContactFetch: true,
      getContactResponse: {},
      action: type,
    }),
    [CONST.GET_CONTACT_SUCCESS]: () => ({
      ...state,
      getContactResponse: payload,
      getContactError: getContactInitialState.getContactError,
      getContactFetch: false,
      action: type,
    }),
    [CONST.GET_CONTACT_ERROR]: () => ({
      ...state,
      getContactError: payload,
      getContactResponse: getContactInitialState.getContactResponse,
      getContactFetch: false,
      action: type,
    }),
    [CONST.GET_CONTACT_CLEAR]: () => ({
      ...state,
      ...getContactInitialState,
      action: type,
    }),

    [CONST.PUT_CONTACT]: () => ({
      ...state,
      putContactParam: payload,
      putContactFetch: true,
      action: type,
    }),
    [CONST.PUT_CONTACT_SUCCESS]: () => ({
      ...state,
      putContactResponse: payload,
      putContactError: putContactInitialState.putContactError,
      putContactFetch: false,
      action: type,
    }),
    [CONST.PUT_CONTACT_ERROR]: () => ({
      ...state,
      putContactError: payload,
      putContactResponse: putContactInitialState.putContactResponse,
      putContactFetch: false,
      action: type,
    }),
    [CONST.PUT_CONTACT_CLEAR]: () => ({
      ...state,
      ...putContactInitialState,
      action: type,
    }),

    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
