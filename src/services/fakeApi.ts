import axios from 'axios';

const apiFake = axios.create({
  baseURL: 'http://localhost:3003/',
});

export default apiFake;
