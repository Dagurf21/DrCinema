// api/apiClient.js
import axios from 'axios';
import { TOKEN_KEY } from './token_key_secret';

// curl --silent --location --request POST 'https://api.kvikmyndir.is/authenticate' --header "Authorization: Basic $(echo -n "username:passwd" | base64)" | jq '.token' | sed 's/"//g'

const apiClient = axios.create({
    baseURL: 'https://api.kvikmyndir.is',
    headers: {
        'x-access-token': TOKEN_KEY, // Add the token header once here
    },
});

export default apiClient;
