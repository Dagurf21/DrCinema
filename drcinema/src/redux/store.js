import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loggerMiddleware from './reducers/loggerMiddleware'; // Custom middleware

import movieReducer from './reducers/movieReducer';
import upcomingMovieReducer from './reducers/upcomingMovieReducer';
import cinemaReducer from './reducers/cinemaReducer';

// Combine your reducers
const rootReducer = combineReducers({
    movies: movieReducer,
    upcomingMovies: upcomingMovieReducer,
    cinemas: cinemaReducer,
});

// Configure the store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware({ serializableCheck: false });
        console.log('Default Middleware:', defaultMiddleware);
        console.log('Is loggerMiddleware a function:', typeof loggerMiddleware === 'function');
        return defaultMiddleware.concat(loggerMiddleware); // Add only custom middleware
    },
});

export default store;
