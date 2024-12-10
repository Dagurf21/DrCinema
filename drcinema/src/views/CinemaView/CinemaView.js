import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCinemas } from '../../redux/actions/cinemaActions';
import CinemaItem from '../../components/CinemaItem/CinemaItem';

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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <FlatList
                data={cinemas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CinemaItem cinema={item} onPress={handleCinemaPress} />}
                scrollEnabled={false} // Prevent FlatList scrolling, let ScrollView handle it
            />
            <View style={styles.buttonContainer}>
                <Button title="View Upcoming Movies" onPress={handleUpcomingMoviesPress} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
});

export default CinemasScreen;
