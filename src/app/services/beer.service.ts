import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private httpclient: HttpClient) { 
  }

  async getData() {
    let response = await this.httpclient.get("https://api.punkapi.com/v2/beers").toPromise();
    return response;
  }

}
