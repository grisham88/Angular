import { Component, OnInit } from '@angular/core';
import { StockPlacerholderService, Stock } from '../stock-placerholder.service';
import { SearchService } from '../search.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
  providers: [StockPlacerholderService]
})
export class StocksComponent implements OnInit {

  stocks: Stock[] = [];
  private subscription: Subscription;

  constructor(private stockPlacerholderService: StockPlacerholderService,
    private searchService: SearchService) {
    this.subscription = this.searchService.refresh.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    // Set default values and re-fetch any data you need.
    const search: string = this.searchService.getSearchesAsPath();
    if (search) {
      this.stockPlacerholderService.getStock(search).subscribe(
        receivedStocks => {
          this.stocks = receivedStocks;
        }
      );
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves.
    this.subscription.unsubscribe();
  }

  getNumberWithoutPercentage(percentageString: string): number {
    const stringValue = percentageString.replace('%', '');
    const value = parseFloat(stringValue);
    return value;
  }
}
