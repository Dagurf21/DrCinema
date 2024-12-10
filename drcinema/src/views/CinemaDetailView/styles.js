import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#232323'
    },
    detailContainer: {
        marginBottom: 16,
    },
    name: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    description: {
        fontSize: 16,
        marginTop: 5,
        color: '#FFFFFF'
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#7C7C7C',
    },
    details: {
        paddingTop: 10,
        flexShrink: 1,
        alignSelf: 'flex-start',
    },
    detailedItem: {
        borderRadius: 15,
        backgroundColor: '#525252',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    lable: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    value: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    website: {
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
});

export default styles