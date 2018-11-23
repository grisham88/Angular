import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})

export class NewStockComponent implements OnInit {
  searchText = '';
  private subscription: Subscription;

  constructor(private searchService: SearchService,
    private router: Router) {
    this.subscription = this.searchService.refresh.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    // Set default values and re-fetch any data you need.
    this.searchText = 'GOOGL\\MSFT\\DAX';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves.
    this.subscription.unsubscribe();
  }
  addNewStock(symbol: string) {
    this.searchService.addNewSearch(symbol);
    this.router.navigate(['']);
  }
}
