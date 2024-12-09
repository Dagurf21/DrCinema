// src/components/MovieItem.js

import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

const MovieItem = ({ movie, onPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(movie)}>
            {movie.thumbnailUrl && (
                <Image source={{ uri: movie.thumbnailUrl }} style={styles.thumbnail} />
            )}
            <View style={styles.details}>
                <Text style={styles.movieName}>{movie.name}</Text>
                <Text>Release Year: {movie.releaseYear}</Text>
                <Text>Genres: {movie.genres.join(', ')}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    thumbnail: {
        width: 80,
        height: 120,
        marginRight: 16,
    },
    details: {
        flex: 1,
        justifyContent: 'center',
    },
    movieName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MovieItem;
