import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
  searchList: string[] = [];
  refresh = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  addNewSearch(symbol: string) {
    this.searchList.push(symbol);
  }

  getSearchesAsPath(): string {
    return this.searchList.join('/');
  }
}
