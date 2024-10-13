import axios from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';


export interface Ticker24HRawData {
    symbol: string
    open: string
    low: string
    high: string
    close: string
    quantity: string
    amount: string
    tradeCount: number
    startTime: number
    closeTime: number
    displayName: string
    dailyChange: string
    bid: string
    bidQuantity: string
    ask: string
    askQuantity: string
    ts: number
    markPrice: string
}


export type Ticker24HData = Pick<Ticker24HRawData, 'symbol' | 'displayName' | 'dailyChange' | 'bid' | 'markPrice'>


const getPreparedTicker24HData = (data: Ticker24HRawData[]): Ticker24HData[] => {
    return data.map(ticker => ({
        symbol: ticker.symbol,
        displayName: ticker.displayName,
        dailyChange: ticker.dailyChange,
        bid: ticker.bid,
        markPrice: ticker.markPrice,
    }));
};

class MarketStore {
    loading = false;
    error: string | null = null;
    private intervalId: null | NodeJS.Timeout = null;
    Ticker24HData: Ticker24HData[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async fetchData() {
        this.loading = true;
        try {
            const response = await axios.get('https://api.poloniex.com/markets/ticker24h');
            runInAction(() => {
                const preparedTicker24HData = getPreparedTicker24HData(response.data);
                this.Ticker24HData = preparedTicker24HData;
                this.error = null;
            });
        } catch (error) {
            console.error('Failed to fetch data', error);
            runInAction(() => {
                this.error = 'Не удалось загрузить данные.';
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    startPollingForData() {
        this.intervalId = setInterval(() => {
            this.fetchData();
        }, 5000);
    }


    stopPollingForData() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

}

const marketStore = new MarketStore();

export default marketStore;
