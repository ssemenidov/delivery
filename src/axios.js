import axios from 'axios';
console.log(process.env.NODE_ENV);
const instance = axios.create({
  baseURL: 'http://localhost:5001/delivery-d1/us-central1/api/',
});
export default instance;
