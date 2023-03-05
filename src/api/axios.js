/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import axios from 'axios';
import API_BASE_URL from '../constants';
import { readToken } from '../utils';

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer: ${readToken()}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default httpClient;
