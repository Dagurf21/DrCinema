import TOKEN_KEY from './token_key_secret'
import axios from 'axios';


// Define the base URL
const BASE_URL = 'https://api.kvikmyndir.is';

// Replace user:pass with username and password
// curl --silent --location --request POST 'https://api.kvikmyndir.is/authenticate' --header "Authorization: Basic $(echo -n "user:pass" | base64)" | jq '.token' | sed 's/"//g'
const MANUAL_TOKEN = TOKEN_KEY;

// Fetch all cinemas
export const getCinemas = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/theaters`, {
            headers: {
                'x-access-token': MANUAL_TOKEN,
            },
        });
        console.log('Cinemas Response:', response.data);
        return response.data.cinemas; // Adjust based on actual API response
    } catch (error) {
        console.error('Fetch Cinemas Error:', error.response || error.message);
        throw error;
    }
};

// Fetch movies by cinema ID
export const getMoviesByCinema = async (cinemaId) => {
    try {
        const response = await axios.get(`${BASE_URL}/theaters/${cinemaId}/movies`, {
            headers: {
                'x-access-token': MANUAL_TOKEN,
            },
        });
        console.log('Movies Response:', response.data);
        return response.data.movies; // Adjust based on actual API response
    } catch (error) {
        console.error('Fetch Movies Error:', error.response || error.message);
        throw error;
    }
};

// Fetch movie details by movie ID
export const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movies/${movieId}`, {
            headers: {
                'x-access-token': MANUAL_TOKEN,
            },
        });
        console.log('Movie Details Response:', response.data);
        return response.data.movie; // Adjust based on actual API response
    } catch (error) {
        console.error('Fetch Movie Details Error:', error.response || error.message);
        throw error;
    }
};

// Fetch upcoming movies
export const getUpcomingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/theaters/upcoming`, {
            headers: {
                'x-access-token': MANUAL_TOKEN,
            },
        });
        console.log('Upcoming Movies Response:', response.data);
        return response.data.upcomingMovies; // Adjust based on actual API response
    } catch (error) {
        console.error('Fetch Upcoming Movies Error:', error.response || error.message);
        throw error;
    }
};
