import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './styles';

const MovieDetailView = ({ route }) => {
    const { movie } = route.params;

    // Ensure the poster URL is valid
    const posterUrl = movie.poster?.startsWith('http') ? movie.poster : `https://${movie.poster}`;

    return (
        <View style={styles.container}>
            {posterUrl ? (
                <Image
                    source={{ uri: posterUrl }}
                    style={styles.thumbnail}
                    onError={(error) => console.error('Image Load Error:', error.nativeEvent)}
                />
            ) : (
                <Text style={styles.noImageText}>No Poster Available</Text>
            )}
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>Year: {movie.year}</Text>
            <Text style={styles.plot}>Plot: {movie.plot}</Text>
            <Text style={styles.duration}>Duration: {movie.durationMinutes}m</Text>
            <Text style={styles.genres}>
                Genres: {movie.genres.map(genre => genre.Name).join(', ')}
            </Text>
            <Text style={styles.description}>{movie.description || "No description available"}</Text>
        </View>
    );
};


export default MovieDetailView;
