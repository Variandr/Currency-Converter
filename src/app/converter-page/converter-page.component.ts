import { Component } from '@angular/core';

@Component({
    selector: 'app-converter-page',
    template: `
        <div class="converter-block">
            <app-converter></app-converter>
        </div>
    `,
    styles: [
        `
            .converter-block {
                width: 40vw;
                display: flex;
                position: relative;
                justify-content: center;
                margin: 20vh auto;
            }
        `,
    ],
})
export class ConverterPageComponent {}
