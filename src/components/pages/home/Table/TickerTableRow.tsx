import React from 'react';
import { Animated, View } from 'react-native';
import { Ticker24HData } from '../../../../stores/MarketStore';
import { useTextAnimation } from './utils/hooks';
import { Text } from 'react-native';
import { formatAsPercentage } from './utils/formatted';
import styles from './styles';

interface TableRowProps {
    ticker: Ticker24HData,
}
const TickerTableRow: React.FC<TableRowProps> = ({ ticker }) => {
    const { markPrice, displayName, dailyChange, bid } = ticker;

    const markPriceAnimation = useTextAnimation(markPrice);
    const bidAnimation = useTextAnimation(bid);
    const dailyChangeAnimation = useTextAnimation(dailyChange);

    const getColorAnimatedStyle = (animatedValue: Animated.Value) => (
        {
            color: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['#000', '#808080'], // темный и стандартный цвет текста
            }),
        }
    );

    return (
        <View style={styles.tableRow}>
            <Text style={[styles.tableRowItem, styles.firstСolumn]}>{displayName}</Text>
            <Animated.Text style={[styles.tableRowItem, styles.secondСolumn, getColorAnimatedStyle(markPriceAnimation)]}>{markPrice}</Animated.Text>
            <Animated.Text style={[styles.tableRowItem, styles.thirdСolumn, getColorAnimatedStyle(bidAnimation)]}>{bid}</Animated.Text>
            <Animated.Text style={[styles.tableRowItem, styles.fourthСolumn, getColorAnimatedStyle(dailyChangeAnimation)]}>{formatAsPercentage(Number(dailyChange))}</Animated.Text>
        </View>
    );
};

export default TickerTableRow;

