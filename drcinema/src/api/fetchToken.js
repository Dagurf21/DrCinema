const axios = require('axios');
const fs = require('fs');

// Replace this with your actual Base64 encoded credentials.
const BASE64_CRED = 'PlaceHolder';

async function fetchToken() {
    try {
        const response = await axios.post('https://api.kvikmyndir.is/authenticate', {}, {
            headers: {
                'Authorization': `Basic ${BASE64_CRED}`
            }
        });

        // Assuming the response is { token: "eyJ0eXAi..." }
        const token = response.data.token;
        if (!token) {
            throw new Error('Token not found in response.');
        }

        const fileContent = `export const TOKEN_KEY = '${token}'
export default {TOKEN_KEY}
`;

        fs.writeFileSync('token_key_secret.js', fileContent, 'utf8');
        console.log('Token file created: token_key_secret.js');
    } catch (err) {
        console.error('Error fetching token:', err.message);
        process.exit(1);
    }
}

fetchToken();
