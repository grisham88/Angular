import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StockPlacerholderService {

  constructor(private httpClient: HttpClient) { }

  getStock(symbol: string) {
    return this.httpClient.get<Stock[]>('https://stockplaceholder.herokuapp.com/api/stocks/' + symbol);
  }

}

export interface Stock {
  symbol: string;
  name: string;
  change: string;
  currency: string;
  lastTradeDate: string;
  lastTradePriceOnly: string;
  changeinPercent: string;
  lastTradeTime: string;
}
