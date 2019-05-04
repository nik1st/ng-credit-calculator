import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private _http: HttpClient) { }

  public getAll(){
    return this._http.get('https://www.cbr-xml-daily.ru/daily_json.js');
  }
}
