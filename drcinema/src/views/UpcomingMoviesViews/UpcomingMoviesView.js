import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies } from '../../redux/actions/upcomingMovieActions';
import YoutubeIframe from 'react-native-youtube-iframe';

const UpcomingMoviesView = () => {
    const dispatch = useDispatch();
    const upcomingMovieState = useSelector((state) => state.upcomingMovies);
    const { upcomingMovies } = upcomingMovieState;

    const [trailerKey, setTrailerKey] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        dispatch(fetchUpcomingMovies());
    }, [dispatch]);

    const handleWatchTrailer = (movie) => {
        if (movie?.trailers?.length > 0) {
            const key = movie.trailers[0]?.results[0]?.key;
            if (!key) {
                console.error('Trailer key is missing for this movie.');
                return;
            }
            setTrailerKey(key);
            setModalVisible(true);
        } else {
            console.warn('No trailer available for this movie:', movie.title);
        }
    };

    const renderTrailerModal = () => (
        <Modal visible={modalVisible} transparent={false} animationType="slide">
            <View style={styles.modalContainer}>
                {trailerKey ? (
                    <YoutubeIframe
                        height={300}
                        play={true}
                        videoId={trailerKey}
                        onError={(error) => console.error('❌ YouTube Error:', error)}
                    />
                ) : (
                    <Text>Loading trailer...</Text>
                )}
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
                {item?.trailers?.length > 0 && (
                    <TouchableOpacity onPress={() => handleWatchTrailer(item)}>
                        <Text style={styles.trailerText}>Watch Trailer</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {trailerKey && renderTrailerModal()}
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
    container: { flex: 1 },
    listContainer: { padding: 16 },
    movieContainer: { flexDirection: 'row', marginBottom: 16 },
    poster: { width: 80, height: 120, marginRight: 16 },
    details: { flex: 1 },
    movieName: { fontSize: 16, fontWeight: 'bold' },
    releaseDate: { fontSize: 14, color: '#555' },
    trailerText: { color: 'blue', textDecorationLine: 'underline' },
    modalContainer: { flex: 1, backgroundColor: '#000', justifyContent: 'center' },
    closeButton: { marginTop: 20, padding: 10, backgroundColor: '#fff', borderRadius: 5 },
    closeButtonText: { color: '#000', fontWeight: 'bold' },
});

export default UpcomingMoviesView;
