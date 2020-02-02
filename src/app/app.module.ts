import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { HttpClient } from 'selenium-webdriver/http';
import { BeertableComponent } from './beertable/beertable.component';
import { BeerService } from './services/beer.service';
import { APIserviceService } from './services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    HttpClient,
    BeertableComponent,
    MatTableModule,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    
    
  ],
  providers: [BeerService,APIserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
