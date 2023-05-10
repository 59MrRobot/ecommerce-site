import axios from 'axios';

const BASE_URL = "https://coffee-scallop-tam.cyclic.app/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: "",
  },
});

userRequest.interceptors.request.use(
  config => {
    config.headers['token'] = `Bearer ${JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);