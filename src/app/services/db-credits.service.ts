import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DbCreditsService {

  constructor(private _http: HttpClient,
              private _localStorageService: LocalStorageService) { }

  getCredits(){
    let idUser = this._localStorageService.getIdUser();
    let params = new HttpParams().set('id', idUser);

    return this._http.get('https://api-credit-base.herokuapp.com/api/credits', {params: params});
  }

  getPayments(idCredit){

    let params = new HttpParams().set('id', idCredit);

    return this._http.get('https://api-credit-base.herokuapp.com/api/credit/payments', {params: params});
  }

  getOneCredit(idCredit){

    let params = new HttpParams().set('id', idCredit);

    return this._http.get('https://api-credit-base.herokuapp.com/api/credit', {params: params});
  }

  deleteCredit(idCredit){

    let params = new HttpParams().set('id', idCredit);

    return this._http.delete('https://api-credit-base.herokuapp.com/api/credit', {params: params})
  }
}


export class CreditData{
  idCredit: number;
  idBank: number;
  amount: number;
  paymentPeriod: number;
  percent: number;
  dateStarting: string;
}

// export class PaymentsData{
//   numOdPay: number;
//   pay: number;
//   mainDebt: number;
//   amountOfPercent: number;
//   debtOfCredit: number;
//   dateOfPay: Date;
// }
