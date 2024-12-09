import { combineReducers } from 'redux';
import upcomingMovieReducer from './upcomingMovieReducer';
import movieReducer from './movieReducer';
import cinemaReducer from './cinemaReducer';

const rootReducer = combineReducers({
    upcomingMovies: upcomingMovieReducer,
    movies: movieReducer,
    cinemas: cinemaReducer,
});


export default rootReducer;
