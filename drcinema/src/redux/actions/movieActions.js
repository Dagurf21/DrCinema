// src/redux/actions/movieActions.js

import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
} from './actionTypes';
import { getMoviesByCinema } from '../../api/api';

export const fetchMovies = (cinemaId) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_MOVIES_REQUEST });

        try {
            const movies = await getMoviesByCinema(cinemaId);
            dispatch({ type: FETCH_MOVIES_SUCCESS, payload: movies });
        } catch (error) {
            dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
        }
    };
};
