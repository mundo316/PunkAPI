import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {

  constructor(private httpclient: HttpClient) { }
}

