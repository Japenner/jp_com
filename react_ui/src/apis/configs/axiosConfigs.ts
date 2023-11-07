// from: https://semaphoreci.com/blog/api-layer-react

import axios from "axios";

export const api = axios.create({
  withCredentials: true,
  // @ts-ignore
  baseURL: window._env_.REACT_APP_API_URL,
});

// defining a custom error handler for all APIs
const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

// registering the custom error handler to the "api" axios instance
api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

export default api;
