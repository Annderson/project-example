import axios from 'axios';

const instanceAxios = axios.create({
  timeout: 2000,
  headers: {
    Accept: 'application/json',
  },
  responseType: 'json',
});

export default {
  get: instanceAxios.get,
  post: instanceAxios.post,
  put: instanceAxios.put,
  delete: instanceAxios.delete,
};
