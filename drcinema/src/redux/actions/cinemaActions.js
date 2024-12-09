// src/redux/actions/cinemaActions.js

import {
    FETCH_CINEMAS_REQUEST,
    FETCH_CINEMAS_SUCCESS,
    FETCH_CINEMAS_FAILURE,
} from './actionTypes';
import { getCinemas } from '../../api/api';

export const fetchCinemas = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_CINEMAS_REQUEST });

        try {
            const cinemas = await getCinemas();
            // Sort cinemas alphabetically
            cinemas.sort((a, b) => a.name.localeCompare(b.name));
            dispatch({ type: FETCH_CINEMAS_SUCCESS, payload: cinemas });
        } catch (error) {
            dispatch({ type: FETCH_CINEMAS_FAILURE, payload: error.message });
        }
    };
};
