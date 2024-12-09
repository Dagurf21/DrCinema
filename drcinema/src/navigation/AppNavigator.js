// src/navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CinemasScreen from '../views/CinemaView/CinemaView';
import CinemaDetailsView from '../views/CinemaDetailView/CinemaDetailsView';
import MovieDetailView from '../views/MovieDetailView/MovieDetailView';
import UpcomingMoviesViews from '../views/UpcomingMoviesViews/UpcomingMoviesView';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cinemas">
                <Stack.Screen name="Cinemas" component={CinemasScreen} />
                <Stack.Screen name="CinemaDetail" component={CinemaDetailsView} options={({ route }) => ({ title: route.params.cinema.name })} />
                <Stack.Screen name="MovieDetail" component={MovieDetailView} options={({ route }) => ({ title: route.params.movie.name })} />
                <Stack.Screen name="UpcomingMovies" component={UpcomingMoviesViews} options={{ title: 'Upcoming Movies' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
