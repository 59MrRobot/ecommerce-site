import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";

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