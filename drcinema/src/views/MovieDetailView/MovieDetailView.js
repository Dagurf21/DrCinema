// src/views/MovieDetailView.js

import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, FlatList, Linking, Button, ScrollView } from 'react-native';
import { getMovieDetails } from '../../api/api';

const MovieDetailView = ({ route }) => {
    const { movie, cinema } = route.params;
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchDetails = async () => {
        try {
            const details = await getMovieDetails(movie.id);
            setMovieDetails(details);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error || !movieDetails) {
        return (
            <View style={styles.center}>
                <Text>Error loading movie details.</Text>
            </View>
        );
    }

    const handlePurchaseTicket = () => {
        // Assuming there's a purchase link in movieDetails
        if (movieDetails.purchaseLink) {
            Linking.openURL(movieDetails.purchaseLink);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {movieDetails.imageUrl && (
                <Image source={{ uri: movieDetails.imageUrl }} style={styles.poster} />
            )}
            <Text style={styles.name}>{movieDetails.name}</Text>
            <Text>Plot: {movieDetails.plot}</Text>
            <Text>Duration: {movieDetails.duration} minutes</Text>
            <Text>Year of Release: {movieDetails.releaseYear}</Text>
            <Text>Genres: {movieDetails.genres.join(', ')}</Text>

            <Text style={styles.sectionTitle}>Showtimes at {cinema.name}</Text>
            {movieDetails.showtimes && movieDetails.showtimes.length > 0 ? (
                <FlatList
                    data={movieDetails.showtimes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Text>{item.time}</Text>}
                />
            ) : (
                <Text>No showtimes available.</Text>
            )}

            {movieDetails.purchaseLink && (
                <Button title="Purchase Ticket" onPress={handlePurchaseTicket} />
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    poster: {
        width: '100%',
        height: 300,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default MovieDetailView;
