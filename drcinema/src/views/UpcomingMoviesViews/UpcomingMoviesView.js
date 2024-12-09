// src/views/UpcomingMoviesScreen.js

import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies } from '../../redux/actions/upcomingMovieActions';
import { Video } from 'expo-av'; // For playing trailers
import MovieItem from '../../components/MovieItem/MovieItem';

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
        if (movie.trailerUrl) {
            setTrailerUrl(movie.trailerUrl);
            setModalVisible(true);
        }
    };

    const renderTrailer = () => (
        <Modal visible={modalVisible} transparent={false}>
            <View style={styles.modalContainer}>
                <Video
                    source={{ uri: trailerUrl }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    shouldPlay
                    useNativeControls
                    style={styles.video}
                />
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Close Trailer</Text>
                </TouchableOpacity>
            </View>
        </Modal>
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
            {trailerUrl && renderTrailer()}
            <FlatList
                data={upcomingMovies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        {item.thumbnailUrl && (
                            <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} />
                        )}
                        <View style={styles.details}>
                            <Text style={styles.movieName}>{item.name}</Text>
                            <Text>Release Date: {item.releaseDate}</Text>
                            {item.trailerUrl && (
                                <TouchableOpacity onPress={() => handleWatchTrailer(item)}>
                                    <Text style={styles.trailerText}>Watch Trailer</Text>
                                </TouchableOpacity>
                            )}
                        </View>
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
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 16,
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
    trailerText: {
        color: 'blue',
        marginTop: 8,
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
