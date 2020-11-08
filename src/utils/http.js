import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use((response) => response, (error) => {
  throw error;
});

export default axiosInstance;
