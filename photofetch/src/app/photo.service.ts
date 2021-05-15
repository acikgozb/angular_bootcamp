import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Photo {
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) { }

  getRandomPhoto() {
    return this.httpClient.get<Photo>('https://api.unsplash.com/photos/random', {
      headers: {
        'Accept-Version': 'v1',
        'Authorization': 'Client-ID XhxFEA4bADwmG6aiobmr06nCOM43Z9oxDysllphKSeI'
      }
    });
  }
}
