import { BASE_URL } from '@/constants/global';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export default axiosInstance;
