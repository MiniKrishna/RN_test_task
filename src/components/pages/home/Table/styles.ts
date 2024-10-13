import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tableContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tableRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    },
    tableRowItem: {
        fontSize: 16,
        textAlign: 'center',
    },
    tableHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'tomato',
        paddingVertical: 5,
    },
    tableHeaderItem: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    errorContainer: {
        backgroundColor: 'red',
        flex: 1,
    },
    errorText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    firstСolumn: {
        width: '15%',
    },
    secondСolumn: {
        width: '35%',
    },
    thirdСolumn: {
        width: '35%',
    },
    fourthСolumn: {
        width: '15%',
    },
});


export default styles;
