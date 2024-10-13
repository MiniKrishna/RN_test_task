import React from 'react';
import { Ticker24HData } from '../../../../stores/MarketStore';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import TickerTableRow from './TickerTableRow';

interface TickerTableProps {
    data: Ticker24HData[],
    error: string | null,
}

const TickersTable: React.FC<TickerTableProps> = ({ data, error}) => {
    const getHeader = () => (
    <>
        <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderItem, styles.firstСolumn]}>{'Имя'}</Text>
            <Text style={[styles.tableHeaderItem, styles.secondСolumn]}>{'Цена($)'}</Text>
            <Text style={[styles.tableHeaderItem, styles.thirdСolumn]}>{'Bid($)'}</Text>
            <Text style={[styles.tableHeaderItem, styles.fourthСolumn]}>{'±(%)'}</Text>
        </View>
        {error && <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
        </View>}
    </>
    );

    return (
        <SafeAreaView style={styles.tableContainer}>
            <FlatList
                ListHeaderComponent={getHeader}
                data={data}
                stickyHeaderIndices={[0]}
                renderItem={({ item }) => <TickerTableRow ticker={item} />}
                keyExtractor={item => item.symbol}
            />
        </SafeAreaView>
    );
};




export default TickersTable;
