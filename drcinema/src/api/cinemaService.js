import apiClient from './apiClient';
import { normalizeCinema } from '../utils/utils';

export const getCinemas = async () => {
    try {
        const response = await apiClient.get('/theaters');
        return response.data.map(normalizeCinema);
    } catch (error) {
        console.error('Error fetching theaters:', error.response?.data || error.message);
        throw error;
    }
};