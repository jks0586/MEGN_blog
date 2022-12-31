import axios from 'axios';
// import * as dotenv from 'dotenv';
import { routeslink  }from './routeslink';
// dotenv.config();
// const laxios = axios.create({
//     baseURL: 'http://localhost:4000/rest/',
//   });
const laxios = axios.create({
    baseURL: routeslink.baseurl,
  });

//   laxios.defaults.timeout = 2500;
  if (typeof window !== 'undefined') {
  laxios.defaults.headers.common['Authorization'] = (localStorage.getItem('lets_token'))?localStorage.getItem('lets_token'):'';
}
  laxios.defaults.headers.common['Content-Type'] = 'application/json';
//   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

 export default laxios;