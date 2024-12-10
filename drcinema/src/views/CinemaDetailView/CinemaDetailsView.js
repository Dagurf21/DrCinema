import React, { useEffect } from 'react';
import {View, Text, FlatList, Linking, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/actions/movieActions';
import MovieItem from '../../components/MovieItem/MovieItem';
import styles from './styles';

const CinemaDetailScreen = ({ route, navigation }) => {
    const { cinema } = route.params;

    const dispatch = useDispatch();
    const movieState = useSelector((state) => state.movies);
    const { loading, movies, error } = movieState;

    useEffect(() => {
        dispatch(fetchMovies(cinema.id));
    }, [dispatch, cinema.id]);

    const handleMoviePress = (movie) => {
        //console.log('Selected Movie:', movie);
        //console.log('Cinema ID:', cinema.id);

        const filteredShowtimes = movie.showtimes?.filter(
            (showtime) => showtime.cinema?.id === cinema.id
        ) || [];

        navigation.navigate('MovieDetail', {
            movie: {
                ...movie,
                showtimes: filteredShowtimes,
            },
        });
    };


    const openWebsite = (url) => {
        //console.log(url);

        if (!url) {
            console.error('Invalid URL');
            return;
        }

        // Ensure the URL includes http:// or https://
        const normalizedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;

        Linking.openURL(normalizedUrl).catch((err) =>
            console.error('Failed to open URL:', err)
        );
    };

    return (
        <ScrollView style={styles.container}>
            {/* Cinema Details */}
            <View style={styles.detailContainer}>
                <Text style={styles.name}>{cinema.name}</Text>
                <Text style={styles.description}>{cinema.description || 'No description'}</Text>
                <View style={styles.details}>
                    <View style={styles.detailedItem}>
                        <Text style={styles.label}>Address:</Text>
                        <Text style={styles.value}>
                            {cinema.address}, {cinema.city}
                        </Text>
                    </View>
                    <View style={styles.detailedItem}>
                        <Text style={styles.label}>Phone: </Text>
                        <Text style={styles.value}>{cinema.phone || 'Unavailable'}</Text>
                    </View>
                    <View style={styles.detailedItem}>
                        <Text style={styles.label}>Website:</Text>
                        <Text style={styles.website} onPress={() => openWebsite(cinema.website)}>
                            {cinema.website}
                        </Text>
                    </View>
                </View>
            </View>

            {/* Section Title */}
            <Text style={styles.sectionTitle}>Movies Showing</Text>

            {/* Movies Section */}
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : (
                <FlatList
                    data={movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <MovieItem movie={item} onPress={handleMoviePress} />}
                    // Disable FlatList scrolling to allow the entire screen to scroll
                    scrollEnabled={false}
                />
            )}
        </ScrollView>
    );
};

export default CinemaDetailScreen;
