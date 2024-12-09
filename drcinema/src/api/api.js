import TOKEN_KEY from './token_key_secret'
import axios from 'axios';


// Define the base URL
const BASE_URL = 'https://api.kvikmyndir.is';

// Replace user:pass with username and password
// curl --silent --location --request POST 'https://api.kvikmyndir.is/authenticate' --header "Authorization: Basic $(echo -n "user:pass" | base64)" | jq '.token' | sed 's/"//g'
const MANUAL_TOKEN = TOKEN_KEY.TOKEN_KEY;

export const getCinemas = async () => {
    console.log('getCinemas');
    try {
        const response = await axios.get(`${BASE_URL}/theaters`, {
            headers: {
                'x-access-token': MANUAL_TOKEN,
            },
        });

        return response.data; // Adjust based on the actual response structure
    } catch (error) {
        console.error('Error fetching theaters:', error.response?.data || error.message);
        throw error;
    }
};

export const getMovies = async () => {
    console.log('getMovies');
    try {
        const response = await axios.get(`${BASE_URL}/movies`, {
            headers: {
                'x-access-token': MANUAL_TOKEN,
            },
        });

        const movies = response.data;
        //console.log(movies);

        if (movies.length === 0) {
            throw new Error('Failed to fetch movies.');
        }

        //console.log('Movies Response:', movies);
        return movies; // Assuming data contains the movies array

    } catch (error) {
        console.error('Error fetching movies:', error.response?.data || error.message);
        throw error;
    }
};

// Fetch movies by cinema ID
export const getMoviesByCinema = async (theaterId) => {
    console.log(`Fetching movies for theater ID: ${theaterId}`);
    try {
        // Fetch all movies
        const response = await axios.get(`${BASE_URL}/movies`, {
            headers: {
                'x-access-token': MANUAL_TOKEN,
            },
        });

        // Filter movies based on theater ID in showtimes
        const movies = response.data.filter(movie =>
            movie.showtimes.some(showtime => showtime.cinema?.id === theaterId)
        );

        console.log(`Movies for Theater ${theaterId}:`, movies);
        return movies;
    } catch (error) {
        console.error('Error fetching movies by theater:', error.response?.data || error.message);
        throw error;
    }
};

// Fetch movie details by movie ID
export const getMovieDetails = async (movieId) => {
    console.log('getMovieDetails', movieId);
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
