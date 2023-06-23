import axios from 'axios';
import Config from 'react-native-config';

export const {BASE_URL} = Config;
export const api = axios.create({
  timeout: 35000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-store',
  },
  baseURL: BASE_URL,
});
