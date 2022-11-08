import axios from 'axios';
import { getLocalStorage } from '../utils/localStorage';

axios.interceptors.request.use(
	(config) => {
		const token = getLocalStorage();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(err) => Promise.reject(err)
);

export default axios;
