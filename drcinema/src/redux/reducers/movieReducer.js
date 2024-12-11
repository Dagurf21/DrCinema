// src/redux/reducers/movieReducer.js

import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
    loading: false,
    movies: [],
    error: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            console.log('Reducer: FETCH_MOVIES_REQUEST');
            return { ...state, loading: true };
        case FETCH_MOVIES_SUCCESS:
            console.log('Reducer: FETCH_MOVIES_SUCCESS');
            return { loading: false, movies: action.payload, error: null };
        case FETCH_MOVIES_FAILURE:
            console.log('Reducer: FETCH_MOVIES_FAILURE');
            return { loading: false, movies: [], error: action.payload };
        default:
            return state;
    }
};

export default movieReducer;
