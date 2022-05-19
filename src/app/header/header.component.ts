import {Component} from '@angular/core';
import {currency, ShareService} from "../share.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currencies: currency | null = null

  constructor(private share: ShareService) {
    this.share.onCurrencyChange.subscribe(props => this.currencies = props)
  }
}
