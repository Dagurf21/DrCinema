// src/redux/actions/cinemaActions.js

import {
    FETCH_CINEMAS_REQUEST,
    FETCH_CINEMAS_SUCCESS,
    FETCH_CINEMAS_FAILURE,
} from './actionTypes';
import { getCinemas } from '../../api/api';

export const fetchCinemas = () => {
    console.log("cinemaActions.js");
    return async (dispatch) => {
        dispatch({ type: FETCH_CINEMAS_REQUEST });

        try {
            const cinemas = await getCinemas();

            // Safeguard against undefined or invalid names
            cinemas.sort((a, b) => {
                const nameA = a.name || ''; // Default to an empty string if name is undefined
                const nameB = b.name || ''; // Default to an empty string if name is undefined
                return nameA.localeCompare(nameB);
            });

            dispatch({ type: FETCH_CINEMAS_SUCCESS, payload: cinemas });
        } catch (error) {
            dispatch({ type: FETCH_CINEMAS_FAILURE, payload: error.message });
        }
    };
};
