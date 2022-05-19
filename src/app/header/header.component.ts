import { Component } from '@angular/core';
import { currency, CurrencyService } from '../services/currencyService';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    currencies: currency | null = null;

    constructor(private share: CurrencyService) {
        this.share.onCurrencyChange.subscribe((res) => (this.currencies = res));
    }
}
