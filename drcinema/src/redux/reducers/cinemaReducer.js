// src/redux/reducers/cinemaReducer.js

import {
    FETCH_CINEMAS_REQUEST,
    FETCH_CINEMAS_SUCCESS,
    FETCH_CINEMAS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
    loading: false,
    cinemas: [],
    error: null,
};

const cinemaReducer = (state = initialState, action) => {
    //console.log("cinemaReducer ->", action);
    switch (action.type) {
        case FETCH_CINEMAS_REQUEST:
            return { ...state, loading: true };
        case FETCH_CINEMAS_SUCCESS:
            return { loading: false, cinemas: action.payload, error: null };
        case FETCH_CINEMAS_FAILURE:
            return { loading: false, cinemas: [], error: action.payload };
        default:
            return state;
    }
};

export default cinemaReducer;
