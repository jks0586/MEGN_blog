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
// const router=useRouter();
//   laxios.defaults.timeout = 2500;

// console.log(window);
  if (typeof window !== 'undefined') {
    
    laxios.defaults.headers.common['Authorization'] = (localStorage.getItem('letscms_token'))?localStorage.getItem('letscms_token'):'';
  }
  laxios.defaults.headers.common['Content-Type'] = 'application/json';
  // return ;
  // laxios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';





// Add a request interceptor
laxios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
laxios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log(response);
  if(response.data && response.data.data && response.data.data.token){
    localStorage.setItem('adminId', response.data.data.adminId);
    localStorage.setItem('email', response.data.data.email);
    localStorage.setItem('letscms_token', response.data.data.token);
  }
  return response;
}, function (error) {
  // console.log(error);
  if(error.response && error.response.status==401){
    window.location=adminlink.auth.login;
    return Promise.reject(error.response);
  } else {
    // console.log('aaaaa');
    return Promise.reject(error.response.data.errors);
  }
  // console.log(error.response.status,'yyyyyyyy');
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  
});

 export default laxios;
