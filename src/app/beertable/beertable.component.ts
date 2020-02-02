import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service'; 
import {MatTableModule} from '@angular/material/table';
import { from } from 'rxjs';
import { BeerComponent } from '../beer/beer.component';
import { Beerinterface } from '../interfaces/beerinterface';


@Component({
  selector: 'app-beertable',
  templateUrl: './beertable.component.html',
  styleUrls: ['./beertable.component.css']
})


export class BeertableComponent implements OnInit {
  beer = [this.beerService.getData()];
  displayedColumns: string[] = ['name', 'tagline', 'first_brewed'];

  constructor(private beerService:BeerService) { }

  ngOnInit() {
    this.beerService.getData();

  }

}
