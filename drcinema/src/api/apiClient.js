// api/apiClient.js
import axios from 'axios';
import { TOKEN_KEY } from './token_key_secret';

const apiClient = axios.create({
    baseURL: 'https://api.kvikmyndir.is',
    headers: {
        'x-access-token': TOKEN_KEY, // Add the token header once here
    },
});

console.log('Token being used:', TOKEN_KEY);


export default apiClient;
