import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {currency, ShareService} from "../share.service";

export interface currencies {
  success: boolean,
  base: string,
  date: string,
  rates: currency,
  timestamp: number
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})

export class ApiComponent implements OnInit {

  constructor(private http: HttpClient, private share: ShareService) {
  }

  ngOnInit() {
    this.http.get<currencies>("https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CEUR&base=UAH", {
      headers: {
        "apikey": "kjvyvNPm6tmPAkKkEHFrp6jdEQbt2kBV"
      }
    }).subscribe(res => {
      if (res.rates) {
        this.share.setCurrencies(res.rates)
      } else console.log('no data')
    })
  }
}
