import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 15,
        backgroundColor: '#525252',
        marginVertical: 10

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
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    year: {
        color: '#FFFFFF',
        fontSize: 15,
        marginVertical: 3
    },
    genres: {
        color: '#FFFFFF',
        fontSize: 15,
        marginVertical: 3

    }
});
export default styles;
