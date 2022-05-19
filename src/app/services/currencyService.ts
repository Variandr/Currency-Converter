import { EventEmitter, Injectable } from '@angular/core';

export interface currency {
    EUR: number;
    USD: number;
}

export interface convert {
    to: string;
    from: string;
    inputValue: string;
    outputValue: string;
}

@Injectable()
export class CurrencyService {
    currencies: currency | null = null;
    convert: convert | null = null;
    onCurrencyChange: EventEmitter<currency> = new EventEmitter();
    onConvertChange: EventEmitter<convert> = new EventEmitter();

    setCurrencies(data: currency) {
        this.currencies = data;
        this.onCurrencyChange.emit(this.currencies);
    }

    setConvertData(data: convert) {
        this.convert = data;
        this.onConvertChange.emit(this.convert);
    }
}
