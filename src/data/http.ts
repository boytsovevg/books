import axios from 'axios';
import { API_KEY, BASE_URL } from './config';

export const http = axios.create({
    baseURL: BASE_URL,
    params: {
        key: API_KEY
    }
});
