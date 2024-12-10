import React, { useEffect } from 'react';
import { View, Text, FlatList, Linking, ActivityIndicator, StyleSheet } from 'react-native';
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
        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <Text style={styles.name}>{cinema.name}</Text>
                <Text>{cinema.description || "No description available"}</Text>
                <Text>
                    Address: {cinema.address}, {cinema.city}
                </Text>
                <Text>Phone: {cinema.phone || "Unavailable"}</Text>
                <Text
                    style={styles.website}
                    onPress={() => openWebsite(cinema.website)}
                >
                    Website: {cinema.website}
                </Text>
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
        textDecorationLine: 'underline',
    },
    sectionTitle: {
        fontSize: 18,
        marginVertical: 8,
        fontWeight: 'bold',
    },
});

export default CinemaDetailScreen;
