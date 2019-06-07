import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export const get = url => {
  return axios.get(BASE_URL + url);
};
