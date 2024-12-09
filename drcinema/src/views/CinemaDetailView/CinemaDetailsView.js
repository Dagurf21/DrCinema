// src/views/CinemaDetailScreen.js

import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/actions/movieActions';
import MovieItem from '../../components/MovieItem/MovieItem';

const CinemaDetailScreen = ({ route, navigation }) => {
    const { cinema } = route.params;
    const dispatch = useDispatch();
    const movieState = useSelector((state) => state.movies);
    const { loading, movies, error } = movieState;

    useEffect(() => {
        dispatch(fetchMovies(cinema.id));
    }, [dispatch, cinema.id]);

    const handleMoviePress = (movie) => {
        navigation.navigate('MovieDetail', { movie, cinema });
    };

    console.log(cinema, "\n\n\n\n\n\n", movies, "\n", cinema.address);

    return (
        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <Text style={styles.name}>{cinema.name}</Text>
                <Text>{cinema.description}</Text>
                <Text>
                    Address: {cinema.address}, {cinema.city}
                </Text>
                <Text>Phone: {cinema.phone}</Text>
                <Text style={styles.website}>Website: {cinema.website}</Text>
            </View>

            <Text style={styles.sectionTitle}>Movies Showing</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : (
                <FlatList
                    data={movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <MovieItem movie={item} onPress={handleMoviePress} />}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    detailContainer: {
        marginBottom: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    website: {
        color: 'blue',
    },
    sectionTitle: {
        fontSize: 18,
        marginVertical: 8,
        fontWeight: 'bold',
    },
});

export default CinemaDetailScreen;
