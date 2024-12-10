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
        color: '#FFFFFF',
        textAlign: 'center',
    },
    detailItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 10,
        backgroundColor: '#525252',
        margin: 5,
        padding: 10,
        // marginTop: 10
    },
    detail: {
        color: '#FFFFFF',
        marginVertical: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    value: {
        color: '#FFFFFF',
        marginVertical: 5,
        fontSize: 16
    },
});

export default styles;
