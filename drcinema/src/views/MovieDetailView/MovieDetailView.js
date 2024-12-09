import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
            <Text>Year: {movie.year}</Text>
            <Text>Plot: {movie.plot}</Text>
            <Text>Duration: {movie.durationMinutes}m</Text>
            <Text>
                Genres: {movie.genres.map(genre => genre.Name).join(', ')}
            </Text>
            <Text>{movie.description || "No description available"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    thumbnail: {
        width: 150,
        height: 200,
        alignSelf: 'center',
        marginBottom: 16,
    },
    noImageText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default MovieDetailView;
