import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beerinterface } from '../interfaces/beerinterface';
import { BeerComponent } from '../beer/beer.component';



@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private httpclient: HttpClient) { 
  }

  async getData() {
    let response = await this.httpclient.get("https://api.punkapi.com/v2/beers");
    return response;
  }

}
