import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';
import styles from './styles';

const MovieItem = ({ movie, onPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(movie)}>
            {movie.poster && (
                <Image source={{ uri: movie.poster }} style={styles.thumbnail} />
            )}
            <View style={styles.details}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <Text style={styles.year}>Release Year: {movie.year}</Text>
                <Text style={styles.genres}>
                    Genres: {movie.genres.map(genre => `${genre.Name}`).join(', ')}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MovieItem;
