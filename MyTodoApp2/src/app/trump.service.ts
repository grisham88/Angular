import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrumpService {

  constructor(private httpClient: HttpClient) { }

  getThoughts(person: string) {
    return this.httpClient.get<Thoughts>('https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=' + person);
  }
}

export interface Thoughts {
  message: string;
}
