// src/components/CinemaItem.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';

const CinemaItem = ({ cinema, onPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(cinema)}>
            <Text style={styles.cinemaName}>{cinema.name}</Text>
            <Text style={styles.cinemaWebsite}>{cinema.website}</Text>
        </TouchableOpacity>
    );
};


export default CinemaItem;
