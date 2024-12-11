import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCinemas } from '../../redux/actions/cinemaActions';
import CinemaItem from '../../components/CinemaItem/CinemaItem';
import styles from './styles';

const CinemasScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const cinemaState = useSelector((state) => state.cinemas);
    const { loading, cinemas, error } = cinemaState;

    useEffect(() => {
        dispatch(fetchCinemas());
    }, [dispatch]);

    const handleCinemaPress = (cinema) => {
        navigation.navigate('CinemaDetail', { cinema });
    };

    const handleUpcomingMoviesPress = () => {
        navigation.navigate('UpcomingMovies');
    };

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
        <ScrollView style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleUpcomingMoviesPress}>
                    <Text style={styles.buttonText}>View Upcoming Movies</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={cinemas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CinemaItem cinema={item} onPress={handleCinemaPress} />}
                scrollEnabled={false} // Prevent FlatList scrolling, let ScrollView handle it
            />
        </ScrollView>
    );
};

export default CinemasScreen;
