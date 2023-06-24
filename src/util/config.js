import axios from 'axios';
import Config from 'react-native-config';

export const {BASE_URL} = Config;
export const api = axios.create({
  timeout: 35000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-store',
    Accept: 'application/json',
  },
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  request => {
    console.log('request ===>', request);
    return request;
  },
  err => {
    console.log(err);
    return Promise.reject('error ===>', err);
  },
);

api.interceptors.response.use(
  response => {
    console.log('response ===>', response);
    return response;
  },
  err => {
    console.log('error ==>', err);
    return Promise.reject(err);
  },
);
