import { Component } from '@angular/core';
import { ApiComponent } from '../../api/api.component';
import { CurrencyService } from '../../services/currencyService';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
    constructor(private api: ApiComponent, private share: CurrencyService) {}

    currencyInput = 'USD';
    prevInput = '';
    inputValue = '100';
    prevInputValue = '0';
    currencyOutput = 'UAH';
    prevOutput = '';
    outputValue = '0';
    prevOutputValue = '0';
    test: Subscription | undefined;

    convertCurrencies(
        to: string,
        from: string,
        value: string,
        isInput: boolean
    ) {
        this.api.convertCurrencies(to, from, value);
        this.test = this.share.onConvertChange.subscribe((res) => {
            this.prevInput = this.currencyInput = !isInput ? res.to : res.from;
            this.prevOutput = this.currencyOutput = !isInput
                ? res.from
                : res.to;
            this.prevInputValue = this.inputValue = !isInput
                ? res.outputValue
                : res.inputValue;
            this.prevOutputValue = this.outputValue = !isInput
                ? res.inputValue
                : res.outputValue;
        });
    }

    ngAfterViewChecked() {
        if (
            this.currencyInput !== this.prevInput ||
            this.inputValue !== this.prevInputValue ||
            this.currencyOutput !== this.prevOutput
        ) {
            this.convertCurrencies(
                this.currencyOutput,
                this.currencyInput,
                this.inputValue,
                true
            );
        } else if (this.outputValue !== this.prevOutputValue) {
            this.convertCurrencies(
                this.currencyInput,
                this.currencyOutput,
                this.outputValue,
                false
            );
        }
    }

    ngOnDestroy() {
        this.test!.unsubscribe();
    }
}
