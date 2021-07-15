const axios = require('axios');
console.log(process.env.NODE_ENV);
const instance = axios.create({
  baseURL: 'https://search-maps.yandex.ru/v1/',
});
export default instance;
