import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const MovieDetailView = ({ route }) => {
    const { movie } = route.params;

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

            <Text style={styles.sectionTitle}>Showtimes:</Text>
            {movie.showtimes?.length > 0 ? (
                <FlatList
                    data={movie.showtimes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.showtimeContainer}>
                            <Text style={styles.cinemaName}>{item.cinema.name}</Text>
                            <FlatList
                                data={item.schedule}
                                keyExtractor={(scheduleItem, idx) => idx.toString()}
                                renderItem={({ item: scheduleItem }) => (
                                    <Text>{scheduleItem.time}</Text> // Update field name if necessary
                                )}
                            />
                        </View>
                    )}
                />
            ) : (
                <Text>No showtimes available for this cinema.</Text>
            )}
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
    sectionTitle: {
        fontSize: 18,
        marginTop: 16,
        fontWeight: 'bold',
    },
    showtimeContainer: {
        marginVertical: 8,
    },
    cinemaName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MovieDetailView;
