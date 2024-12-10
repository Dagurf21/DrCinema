import apiClient from "./apiClient";

export const getUpcomingMovies = async () => {
    try {
        const response = await apiClient.get('/upcoming');
        return Array.isArray(response.data) ? response.data : response.data.upcomingMovies;
    } catch (error) {
        console.error('Fetch Upcoming Movies Error:', error.response?.data || error.message);
        throw error;
    }
};