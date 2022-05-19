import {EventEmitter} from "@angular/core";

export interface currency {
  EUR: number,
  USD: number
}

export class ShareService {
  currencies: currency | null = null;
  onCurrencyChange: EventEmitter<currency> = new EventEmitter();

  setCurrencies(data: currency) {
    this.currencies = data;
    this.onCurrencyChange.emit(this.currencies);
  }
}
