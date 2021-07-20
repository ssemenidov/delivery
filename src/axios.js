import axios from 'axios';
console.log(process.env.NODE_ENV);
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
export default instance;
