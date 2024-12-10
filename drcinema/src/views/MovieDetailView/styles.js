import {StyleSheet} from "react-native";
import MovieDetailView from "./MovieDetailView";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#232323'
    },
    thumbnail: {
        width: 150,
        height: 200,
        alignSelf: 'center',
        marginBottom: 16,
    },
    noImageText: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    year: {
        color: '#FFFFFF',
        marginVertical: 5,
        fontSize: 16
    },
    plot: {
        color: '#FFFFFF',
        marginVertical: 5,
        fontSize: 16
    },
    duration: {
        color: '#FFFFFF',
        marginVertical: 5,
        fontSize: 16
    },
    genres: {
        color: '#FFFFFF',
        marginVertical: 5,
        fontSize: 16
    },
    description: {
        color: '#FFFFFF',
        marginVertical: 5,
        fontSize: 16
    }
});

export default styles;
