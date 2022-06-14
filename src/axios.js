import axios from 'axios'
import {baseUrl} from './Constats/constats'

const instance = axios.create({
    baseURL: baseUrl ,
  });

  export default instance