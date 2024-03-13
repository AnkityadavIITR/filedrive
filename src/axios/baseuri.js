import axios from "axios";
const baseUrl="http://localhost:4000" || process.env.baseUrl

const axiosInstance= axios.create({
    baseURL:baseUrl,
    timeout:500000
})

const updateToken = () => {
  return new Promise((res, rej) => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    res(token);
  })
  .then((token) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  })
  .catch((err) => console.log(err));
};

axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Interceptor: Setting Authorization header');
    return updateToken().then(() => config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
