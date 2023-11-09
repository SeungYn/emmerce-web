import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8088',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem('access-token');
  req.headers.Authorization = `Baerer ${token}`;
  return req;
});
