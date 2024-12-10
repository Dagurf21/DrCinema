import TOKEN_KEY from './token_key_secret'
import axios from 'axios';


// Define the base URL
const BASE_URL = 'https://api.kvikmyndir.is';

// Replace user:pass with username and password
// curl --silent --location --request POST 'https://api.kvikmyndir.is/authenticate' --header "Authorization: Basic $(echo -n "user:pass" | base64)" | jq '.token' | sed 's/"//g'
const MANUAL_TOKEN = TOKEN_KEY;

/*
 * Fetches all cinemas from the API
 *
 * Endpoint: /theaters
 * Method: GET
 *
 * Headers:
 *   - x-access-token: <string> (required for authentication)
 *
 * Returns:
 *   - Array of cinema objects, each containing:
 *       - id: <number> (unique identifier for the cinema)
 *       - name: <string> (name of the cinema)
 *       - address: <string> (address of the cinema)
 *       - city: <string> (city where the cinema is located)
 *       - phone: <string> (contact phone number for the cinema)
 *       - website: <string> (URL of the cinema's website)
 *       - description: <string> (description of the cinema)
 *
 * Usage:
 *   Call this function to retrieve a list of all cinemas available in the system.
 *   Ensure you include a valid x-access-token in the request headers.
 *
 * Example Response:
 * [
 *   {
 *      "id": 1,
 *      "name": "Smárabíó",
 *      "address": "Smáralind",
 *      "city": "201 Kópavogur",
 *      "phone": "564-0000",
 *      "website": "www.smarabio.is",
 *      "description": "Smárabíó er eitt fullkomnasta kvikmyndahús landsins.",
 *      "google_map": "<link to google map image>"
 *   },
 *   ...
 * ]
 */
export const getCinemas = async () => {
    console.log('getCinemas');
    try {
        const response = await axios.get(`${BASE_URL}/theaters`, {
            headers: {
                'x-access-token': MANUAL_TOKEN,
            },
        });

        // Fix the data since sometimes there is a \t character in the data
        return response.data.map(normalizeCinema); // Adjust based on the actual response structure
    } catch (error) {
        console.error('Error fetching theaters:', error.response?.data || error.message);
        throw error;
    }
};

// Helper function for getCinema
const normalizeCinema = (cinema) => {
    const normalizedCinema = {};
    Object.keys(cinema).forEach((key) => {
        const trimmedKey = key.trim(); // Remove any extra spaces or tabs
        normalizedCinema[trimmedKey] = cinema[key];
    });
    return normalizedCinema;
};

/* Gets all movies from the api */
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
        // Fetch all movies
        const movies = await getMovies();

        // Find the movie with the matching ID
        const movie = movies.find(movie => movie.id === movieId);

        if (!movie) {
            throw new Error(`Movie with ID ${movieId} not found`);
        }

        console.log('Movie Details:', movie);
        return movie;
    } catch (error) {
        console.error('Fetch Movie Details Error:', error.response || error.message);
        throw error;
    }
};

// Fetch upcoming movies
export const getUpcomingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/upcoming`, {
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
