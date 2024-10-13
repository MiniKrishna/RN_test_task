import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import marketStore from '../../../stores/MarketStore';
import { observer } from 'mobx-react';
import TickersTable from '../home/Table';


const MarketScreen: React.FC = observer(() => {

    const { loading, error, Ticker24HData } = marketStore;

    useFocusEffect(
        React.useCallback(() => {
            marketStore.fetchData();
            marketStore.startPollingForData();

            return () => {
                marketStore.stopPollingForData();
            };
        }, [])
    );

    if (loading && Ticker24HData.length === 0 && error === null) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TickersTable data={Ticker24HData} error={error} />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingIndicator: {
        alignSelf: 'center',
    },
});

export default MarketScreen;
