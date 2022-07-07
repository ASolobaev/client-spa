import axios, {AxiosRequestConfig} from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.URL_INFO_SERVICE,
};

export const API = axios.create(config);
