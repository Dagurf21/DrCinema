import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { authenticate, fetchMovies } from '../../api/api';

const MoviesScreen = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const token = await authenticate();
                const moviesData = await fetchMovies(token); // Ensure `fetchMovies` matches API structure
                if (moviesData && Array.isArray(moviesData.movies)) {
                    setMovies(moviesData.movies);
                } else {
                    throw new Error('Invalid movie data structure.');
                }
            } catch (err) {
                console.error('Error fetching movies:', err.message || err);
                setError('Failed to load movies.');
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.movieItem}>
                        <Text style={styles.movieTitle}>{item.title}</Text>
                        <Text>{item.description || 'No description available.'}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default MoviesScreen;
