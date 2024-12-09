// src/redux/actions/upcomingMovieActions.js

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
            const upcomingMovies = await getUpcomingMovies();
            // Sort upcoming movies by release date
            upcomingMovies.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
            dispatch({ type: FETCH_UPCOMING_MOVIES_SUCCESS, payload: upcomingMovies });
        } catch (error) {
            dispatch({ type: FETCH_UPCOMING_MOVIES_FAILURE, payload: error.message });
        }
    };
};
