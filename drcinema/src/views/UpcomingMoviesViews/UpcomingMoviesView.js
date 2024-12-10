import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies } from '../../redux/actions/upcomingMovieActions';
import { Video } from 'expo-video'; // Use expo-video for trailers

const UpcomingMoviesView = () => {
    const dispatch = useDispatch();
    const upcomingMovieState = useSelector((state) => state.upcomingMovies);
    const { loading, upcomingMovies, error } = upcomingMovieState;

    const [trailerUrl, setTrailerUrl] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        dispatch(fetchUpcomingMovies());
    }, [dispatch]);

    const handleWatchTrailer = (movie) => {
        if (movie.trailers && movie.trailers.length > 0) {
            const trailerKey = movie.trailers[0]?.results[0]?.key; // Extract YouTube key
            if (trailerKey) {
                const youtubeUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
                setTrailerUrl(youtubeUrl);
                setModalVisible(true);
            }
        }
    };

    const renderTrailerModal = () => (
        <Modal visible={modalVisible} transparent={false}>
            <View style={styles.modalContainer}>
                <Video
                    source={{ uri: trailerUrl }}
                    style={styles.video}
                    useNativeControls
                    resizeMode="contain"
                    shouldPlay
                />
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Close Trailer</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );

    const renderMovieItem = ({ item }) => (
        <View style={styles.movieContainer}>
            {item.poster && (
                <Image source={{ uri: item.poster }} style={styles.poster} />
            )}
            <View style={styles.details}>
                <Text style={styles.movieName}>{item.title}</Text>
                <Text style={styles.releaseDate}>Release Date: {item['release-dateIS']}</Text>
                {item.trailers && item.trailers.length > 0 && (
                    <TouchableOpacity onPress={() => handleWatchTrailer(item)}>
                        <Text style={styles.trailerText}>Watch Trailer</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );

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
                <Text>Error: {error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {trailerUrl && renderTrailerModal()}
            <FlatList
                data={upcomingMovies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderMovieItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        padding: 16,
    },
    movieContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
    },
    poster: {
        width: 80,
        height: 120,
        marginRight: 16,
    },
    details: {
        flex: 1,
    },
    movieName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    releaseDate: {
        fontSize: 14,
        color: '#555',
    },
    trailerText: {
        color: 'blue',
        marginTop: 8,
        textDecorationLine: 'underline',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: '80%',
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});

export default UpcomingMoviesView;
