// src/components/MovieItem.js

import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

const MovieItem = ({ movie, onPress }) => {
    console.log('Movie thumbnail URL:', movie.poster);
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(movie)}>
            {movie.poster && (
                <Image source={{ uri: movie.poster }} style={styles.thumbnail} />
            )}
            <View style={styles.details}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <Text>Release Year: {movie.year}</Text>
                <Text>
                    Genres: {movie.genres.map(genre => `${genre.Name}`).join(', ')}
                </Text>
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
    movieTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MovieItem;
