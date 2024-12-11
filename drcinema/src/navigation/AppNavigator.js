import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CinemasScreen from '../views/CinemaView/CinemaView';
import CinemaDetailScreen from '../views/CinemaDetailView/CinemaDetailsView';
import MovieDetailView from '../views/MovieDetailView/MovieDetailView';
import UpcomingMoviesView from '../views/UpcomingMoviesViews/UpcomingMoviesView';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                id = 'AppNavigator'
                initialRouteName="Cinemas"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#672E80',

                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 20
                    }
                }}>
                <Stack.Screen
                    name="Cinemas"
                    component={CinemasScreen}
                />
                <Stack.Screen
                    name="CinemaDetail"
                    component={CinemaDetailScreen}
                    options={({ route }) => ({ title: route.params.cinema.name })}
                />
                <Stack.Screen
                    name="MovieDetail"
                    component={MovieDetailView}
                    options={({ route }) => ({ title: route.params.movie.title })}
                />
                <Stack.Screen
                    name="UpcomingMovies"
                    component={UpcomingMoviesView}
                    options={{ title: 'Upcoming Movies' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default AppNavigator;
