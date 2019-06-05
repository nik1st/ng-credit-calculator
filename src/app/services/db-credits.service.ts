import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbCreditsService {

  public isDeleted: Subject<boolean> = new Subject<boolean>();

  constructor(private _http: HttpClient,
              private _localStorageService: LocalStorageService) { }

  getCredits(){
    let idUser = this._localStorageService.getIdUser();
    let params = new HttpParams().set('id', idUser);

    return this._http.get('http://localhost:3000/api/credits', {params: params});
  }

  getPayments(idCredit){

    let params = new HttpParams().set('id', idCredit);

    return this._http.get('http://localhost:3000/api/credit/payments', {params: params});
  }

  getOneCredit(idCredit){

    let params = new HttpParams().set('id', idCredit);

    return this._http.get('http://localhost:3000/api/credit', {params: params});
  }

  deleteCredit(idCredit){
    this.isDeleted.next(true);
    let params = new HttpParams().set('id', idCredit);

    return this._http.delete('http://localhost:3000/api/credit', {params: params})
  }
}


export class CreditData{
  id: number;
  idCredit: number;
  idBank: number;
  bankName: string;
  amount: number;
  paymentPeriod: number;
  percent: number;
  dateStarting: string;
  type: number;
  sum: number;
}
