import {
    FETCH_UPCOMING_MOVIES_REQUEST,
    FETCH_UPCOMING_MOVIES_SUCCESS,
    FETCH_UPCOMING_MOVIES_FAILURE,
} from './actionTypes';
import { getUpcomingMovies } from '../../api/api';

export const fetchUpcomingMovies = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_UPCOMING_MOVIES_REQUEST });

        try {
            const rawMovies = await getUpcomingMovies();
            //console.log('Raw Movies Data:', rawMovies); // Log the raw API response

            // Check if rawMovies is an array before sorting
            if (Array.isArray(rawMovies)) {
                rawMovies.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
                //console.log('Sorted Movies Data:', rawMovies); // Log after sorting
                dispatch({ type: FETCH_UPCOMING_MOVIES_SUCCESS, payload: rawMovies });
            } else {
                throw new Error('API response is not an array');
            }
        } catch (error) {
            console.error('Error in fetchUpcomingMovies:', error); // Log the error
            dispatch({ type: FETCH_UPCOMING_MOVIES_FAILURE, payload: error.message });
        }
    };
};
