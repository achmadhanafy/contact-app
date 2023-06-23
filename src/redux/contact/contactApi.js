import {api} from '../../util/config';

export const contactApi = {
  contact: 'contact',
};

export const getContactsApi = payload => {
  return api.get(contactApi.contact);
};

export const setContactApi = payload => {
  return api.post(contactApi.contact, payload);
};

export const delContactApi = payload => {
  return api.delete(`${contactApi.contact}/${payload}`);
};

export const getContactApi = payload => {
  return api.get(`${contactApi.contact}/${payload}`);
};

export const putContactApi = payload => {
  return api.put(contactApi.contact, payload);
};
