import TOKEN_KEY from './token_key_secret'
import axios from 'axios';


// Define the base URL
const BASE_URL = 'https://api.kvikmyndir.is';

// Replace user:pass with username and password
// curl --silent --location --request POST 'https://api.kvikmyndir.is/authenticate' --header "Authorization: Basic $(echo -n "user:pass" | base64)" | jq '.token' | sed 's/"//g'
const MANUAL_TOKEN = TOKEN_KEY;

// Fetch all cinemas
export const getCinemas = async () => {
    console.log('getCinemas (Temporary Version)');
    try {
        const uniqueCinemaNames = await getUniqueCinemaNames();
        console.log('Temporarily fetched unique cinema names:', uniqueCinemaNames);
        return uniqueCinemaNames;

    } catch (error) {
        console.error('Fetch Cinemas Error (Temporary Version):', error.response?.data || error.message);
        throw error;
    }
};

export const getUniqueCinemaNames = async () => {
    console.log('getUniqueCinemaNames');
    try {
        const movies = await getMovies(); // Call the updated getMovies function

        if (!Array.isArray(movies)) {
            throw new Error('Unexpected data format: movies is not an array');
        }

        const uniqueCinemaNames = new Set();

        movies.forEach(movie => {
            if (movie.showtimes && Array.isArray(movie.showtimes)) {
                movie.showtimes.forEach(showtime => {
                    if (showtime.cinema && showtime.cinema.name) {
                        uniqueCinemaNames.add(showtime.cinema.name);
                    }
                });
            }
        });

        console.log('Unique Cinema Names:', [...uniqueCinemaNames]);
        return [...uniqueCinemaNames];

    } catch (error) {
        console.error('Error fetching unique cinema names:', error.response?.data || error.message);
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

        const { success, data, message } = response.data;

        if (!success) {
            throw new Error(message || 'Failed to fetch movies.');
        }

        console.log('Movies Response:', data);
        return data; // Assuming data contains the movies array

    } catch (error) {
        console.error('Error fetching movies:', error.response?.data || error.message);
        throw error;
    }
};



// Fetch movies by cinema ID
export const getMoviesByCinema = async (cinemaId) => {
    console.log('getMoviesByCinema', cinemaId);
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
