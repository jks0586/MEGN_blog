import axios from 'axios';

const laxios = axios.create({
    baseURL: 'http://localhost:4000/rest/',
  });

  laxios.defaults.timeout = 2500;
  laxios.defaults.headers.common['Authorization'] = localStorage.getItem('lets_token');
  laxios.defaults.headers.post['Content-Type'] = 'application/json';

