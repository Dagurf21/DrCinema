// src/redux/reducers/upcomingMovieReducer.js

import {
    FETCH_UPCOMING_MOVIES_REQUEST,
    FETCH_UPCOMING_MOVIES_SUCCESS,
    FETCH_UPCOMING_MOVIES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
    loading: false,
    upcomingMovies: [],
    error: null,
};

const upcomingMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_UPCOMING_MOVIES_REQUEST:
            return { ...state, loading: true };
        case FETCH_UPCOMING_MOVIES_SUCCESS:
            return { loading: false, upcomingMovies: action.payload, error: null };
        case FETCH_UPCOMING_MOVIES_FAILURE:
            return { loading: false, upcomingMovies: [], error: action.payload };
        default:
            return state;
    }
};

export default upcomingMovieReducer;
