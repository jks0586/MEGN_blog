import axios from 'axios';
// import * as dotenv from 'dotenv';
import { routeslink  }from './routeslink';
import { adminlink } from './adminlink';
import {useRouter} from 'next/router';
// dotenv.config();
// const laxios = axios.create({
//     baseURL: 'http://localhost:4000/rest/',
//   });
const laxios = axios.create({
    baseURL: routeslink.baseurl,
  });

//   laxios.defaults.timeout = 2500;
  if (typeof window !== 'undefined') {
    laxios.defaults.headers.common['Authorization'] = (localStorage.getItem('letscms_token'))?localStorage.getItem('letscms_token'):'';
  }
  laxios.defaults.headers.common['Content-Type'] = 'application/json';
//   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

laxios.interceptors.response.use(response => {
  return response;
}, error => {
  // console.log(error.response.status,'jjjjjjjjjjjjjjj');
 if (error.response.status == 401) {
  // console.log('jjjjjj');
  window.location=adminlink.auth.login;
 }
 return error;
});

 export default laxios;