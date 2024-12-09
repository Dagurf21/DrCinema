// src/components/CinemaItem.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CinemaItem = ({ cinema, onPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(cinema)}>
            <Text style={styles.cinemaName}>{cinema.name}</Text>
            <Text style={styles.cinemaWebsite}>{cinema.website}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cinemaName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cinemaWebsite: {
        color: 'blue',
    },
});

export default CinemaItem;
