import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { pluck } from 'rxjs/operators';


interface WikipediaResponse {
  query: {
    search: {
      pageid: number;
      title: string;
      snippet: string;
    }[]
  }  
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpClient: HttpClient) { }

  search(term: string) {
    return this.httpClient.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    })
    .pipe(
      pluck('query', 'search')
    );
  }
}
