import axios from 'axios';

const config = { baseURL: 'http://localhost:8000/api' };

const apiClient = axios.create(config);

export default apiClient;
