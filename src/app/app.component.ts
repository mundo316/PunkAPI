import { Component } from '@angular/core';
import { APIserviceService } from './services/apiservice.service';
import { BeerService } from './services/beer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PunkAPI';


constructor(private APIservice: APIserviceService, private beerService: BeerService) {

}


}
