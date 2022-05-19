import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { currency, CurrencyService } from '../services/currencyService';

export interface currencies {
    success: boolean;
    base: string;
    date: string;
    rates: currency;
    timestamp: number;
}

interface convert {
    date: string;
    info: {};
    query: {};
    result: string;
    success: boolean;
}

let options = {
    headers: {
        apikey: 'ukL9bjCGAjLOF1Z90Wh9HAF4Fm8E1fjo',
    },
};

@Injectable()
export class ApiComponent {
    constructor(private http: HttpClient, private share: CurrencyService) {}

    getCurrenciesValues() {
        this.http
            .get<currencies>(
                'https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CEUR&base=UAH',
                options
            )
            .subscribe((res) => {
                if (res.rates) {
                    this.share.setCurrencies(res.rates);
                } else console.log('no data');
            });
    }

    convertCurrencies(to: string, from: string, amount: string) {
        this.http
            .get<convert>(
                `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
                options
            )
            .subscribe((res) => {
                if (res) {
                    this.share.setConvertData({
                        to: to,
                        from: from,
                        inputValue: amount,
                        outputValue: res.result,
                    });
                }
            });
    }
}
