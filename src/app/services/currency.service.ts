import { Injectable } from '@angular/core';
import { ExchangeRatesService } from './exchange-rates.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _ExchangeRates: ExchangeRatesService) { }

  public rates: Currency[] = [];

  public loadCurrencies(){
   this._ExchangeRates.getAll().subscribe((result: ExchangeRates) =>
   {
    this.rates.push(<Currency>{charCode: result.Valute['USD'].CharCode, value: result.Valute['USD'].Value });
    this.rates.push(<Currency>{charCode: result.Valute['EUR'].CharCode, value: result.Valute['EUR'].Value });
    this.rates.push(<Currency>{charCode: result.Valute['UAH'].CharCode, value: result.Valute['UAH'].Value });
    this.rates.push(<Currency>{charCode: result.Valute['GBP'].CharCode, value: result.Valute['GBP'].Value });
    });
  }

public directConversion(code: string, amount: number){
  for(let i = 0; i < this.rates.length; i++){
  if(code == this.rates[i].charCode){
      return amount/this.rates[i].value;
    }
  }
}

public reverseConversion(code: string, amount: number){
  for(let i = 0; i < this.rates.length; i++){
    if(code == this.rates[i].charCode){
        return amount*this.rates[i].value;
      }
    }
}


}
export class Currency{
  public charCode: string;
  public value: number;
}


export interface ExchangeRates {
  Date:         string;
  PreviousDate: string;
  PreviousURL:  string;
  Timestamp:    string;
  Valute:       { [key: string]: Valute };
}

export interface Valute {
  ID:       string;
  NumCode:  string;
  CharCode: string;
  Nominal:  number;
  Name:     string;
  Value:    number;
  Previous: number;
}
