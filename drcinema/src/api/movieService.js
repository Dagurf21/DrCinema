import apiClient from "./apiClient";

export const getMovies = async () => {
    try {
        const response = await apiClient.get('/movies');
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error.response?.data || error.message);
        throw error;
    }
};

// Fetch movies by cinema ID
export const getMoviesByCinema = async (theaterId) => {
    console.log(`Fetching movies for theater ID: ${theaterId}`);
    try {
        const response = await apiClient.get('/movies');

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