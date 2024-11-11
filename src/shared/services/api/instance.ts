import axios from 'axios';

import { ApiError } from './error';

const sp = new URLSearchParams(window.location.hash.substring(1));
const payload = sp.get('tgWebAppData');

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    'Content-Type': 'application/json',
    sign: payload
  }
});

axiosInstance.interceptors.response.use(({ data }) => {
  return data;
}, (error) => {
  return Promise.reject(new ApiError(error?.response?.data?.message));
});
