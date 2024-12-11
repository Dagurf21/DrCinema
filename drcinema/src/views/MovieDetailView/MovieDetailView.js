import React from 'react';
import styles from './styles';
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native';

const MovieDetailView = ({ route }) => {
    const { movie } = route.params;

    // Ensure the poster URL is valid
    const posterUrl = movie.poster?.startsWith('http') ? movie.poster : `https://${movie.poster}`;

    return (
        <ScrollView style={styles.container}>
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

            <View style={styles.detailItem}>
                <Text style={styles.value}>{movie.description || "No description available"}</Text>
            </View>

            <View style={styles.detailItem}>
                <Text style={styles.detail}>Year: </Text>
                <Text style={styles.value}>{movie.year}</Text>
            </View>

            <View style={styles.detailItem}>
                <Text style={styles.detail}>Plot: </Text>
                <Text style={styles.value}>{movie.plot}</Text>
            </View>

            <View style={styles.detailItem}>
                <Text style={styles.detail}>Duration: </Text>
                <Text style={styles.value}>{movie.durationMinutes}m</Text>
            </View>

            <View style={styles.detailItem}>
                <Text style={styles.detail}>Genres: </Text>
                <Text style={styles.value}>{movie.genres.map(genre => genre.Name).join(', ')}</Text>
            </View>

            <View style={styles.detailItem}>
                <Text style={styles.detail}>Showtimes: </Text>
                {movie.showtimes?.length > 0 ? (
                    <FlatList
                        data={movie.showtimes}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.showtimeContainer}>
                                <Text style={styles.value}>{item.cinema.name}</Text>
                                <FlatList
                                    data={item.schedule}
                                    keyExtractor={(scheduleItem, idx) => idx.toString()}
                                    renderItem={({ item: scheduleItem }) => (
                                        <Text style={styles.value}>{scheduleItem.time}</Text>
                                    )}
                                />
                            </View>
                        )}
                    />
                ) : (
                    <Text>No showtimes available for this cinema.</Text>
                )}
            </View>
        </ScrollView>
    );
};


export default MovieDetailView;
