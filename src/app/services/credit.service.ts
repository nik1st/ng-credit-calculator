import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { summaryFileName } from '@angular/compiler/src/aot/util';


@Injectable({
  providedIn: 'root'
})
export class CreditService {


  constructor(private _http: HttpClient) { }

  calculateCredit(amountCredit: number, timeCredit: number, percentCredit: number, startingDate: Date, type: number) {
    let credit = {amountCredit: amountCredit, timeCredit: timeCredit, percentCredit: percentCredit, startingDate: startingDate, type: type};
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    let options = {
            headers: headers
        };
        return this._http.post('http://localhost:3000/calc', JSON.stringify(credit), options);
  }

  putCredit(bankId: number, amountCredit: number, timeCredit: number, percentCredit: number, startingDate: string, idUser: number, type: number, sum, creditMas: PaymentData[]){
    let creditAndPayments = {id_bank: bankId, amount: amountCredit, period: timeCredit, percent: percentCredit, date: startingDate, id_user: idUser, type: type, sum_of_percents: sum, payments: creditMas};
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    let options = {
            headers: headers
        };
    return this._http.put('http://localhost:3000/api/credit', JSON.stringify(creditAndPayments), options);
  }

  updateCredit(idCredit: number, bankId: number, amountCredit: number, timeCredit: number, percentCredit: number, startingDate: string, type: number, sum, creditMas: PaymentData[]){
    let creditAndPayments = {id_credit: idCredit, id_bank: bankId, amount: amountCredit, period: timeCredit, percent: percentCredit, date: startingDate, type: type, sum_of_percents: sum, payments: creditMas};
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    let options = {
            headers: headers
        };
    return this._http.post('http://localhost:3000/api/credit', JSON.stringify(creditAndPayments), options);
  }

  getBank(){
    return this._http.get('https://api-credit-base.herokuapp.com/api/banks');
  }


}


export class Message{
  public status: number;
  public message: string;
}

export class Response{
  public paymentMas : PaymentData[];
}

export class BankData{
  bankId: number;
  bankName: string;
}

export class PaymentData {
  public numOfPay: number;
  public pay: number;
  public amountOfPercent: number;
  public mainDebt: number;
  public debtOfCredit: number;
  public dateOfPay: Date;
}