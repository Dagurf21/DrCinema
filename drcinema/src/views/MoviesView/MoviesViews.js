// src/views/MoviesScreen.js

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
                const moviesData = await fetchMovies(token);
                setMovies(moviesData.movies); // Adjust based on API response structure
            } catch (err) {
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
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    movieItem: {
        marginBottom: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MoviesScreen;
