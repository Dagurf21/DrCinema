import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#232323',
    },
    listContainer: {
        paddingBottom: 16,
    },
    movieContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#4a4e54',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    poster: {
        width: 80,
        height: 120,
        marginRight: 16,
        borderRadius: 5,
    },
    details: {
        flex: 1,
        justifyContent: 'center',
    },
    movieName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    releaseDate: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    trailerText: {
        color: '#007bff',
        textDecorationLine: 'underline',
        marginTop: 8,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    closeButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});

export default styles;
