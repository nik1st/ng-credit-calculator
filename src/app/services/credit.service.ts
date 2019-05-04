import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IdUser } from './auth.service';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class CreditService {


  constructor(private _http: HttpClient) { }

  calculateCredit(amountCredit: number, timeCredit: number, percentCredit: number, startingDate: Date ){
    let pay = Math.round(100*(amountCredit * (percentCredit / 1200 + (percentCredit / 1200) / ((Math.pow((1 + percentCredit / 1200),timeCredit)) - 1))))/100;
    let creditMas: PaymentData[] = [],
       dateOfPay = startingDate,
      debtOfCredit = amountCredit,
      mainDebt, amountOfPercent,numOfPay,
      previousDate = new Date(startingDate);

    for(let i = 1; i<=timeCredit; i++){
    numOfPay = i;
    dateOfPay = this.plusOneMounth(startingDate, i);
    amountOfPercent = (debtOfCredit * (percentCredit/100)/365)*this.daysBetweenDates(previousDate, dateOfPay);
    mainDebt = pay - amountOfPercent;
    debtOfCredit = debtOfCredit - mainDebt;

    if(debtOfCredit < 0){
      pay = pay + debtOfCredit;
      mainDebt = pay - amountOfPercent;
      debtOfCredit = 0;
    }
    previousDate = new Date(dateOfPay);
    creditMas.push(<PaymentData>{numOfPay: numOfPay, pay: pay, mainDebt: mainDebt, amountOfPercent: amountOfPercent, debtOfCredit: debtOfCredit, dateOfPay: dateOfPay});
    }
    return creditMas;

  }

   daysBetweenDates (leftDate, rightDate) {
    return Math.round((new Date(rightDate).getTime() - new Date(leftDate).getTime())/1000/60/60/24);
  }

  plusOneMounth(currentPaymentsDate: Date, time: number){
    let dateOfNextMonth = new Date(currentPaymentsDate);
    dateOfNextMonth.setMonth(dateOfNextMonth.getMonth() + time);
    if(currentPaymentsDate.getDate() != dateOfNextMonth.getDate()){
      let modifiedDate = new Date(currentPaymentsDate);
      modifiedDate.setMonth(modifiedDate.getMonth() + time);
      modifiedDate.setDate(1);
      return modifiedDate;
    }
    return dateOfNextMonth;
  }

  putCredit(bankId: number, amountCredit: number, timeCredit: number, percentCredit: number, startingDate: string, idUser: number, creditMas: PaymentData[]){
    let creditAndPayments = {id_bank: bankId, amount: amountCredit, period: timeCredit, percent: percentCredit, date: startingDate, id_user: idUser, payments: creditMas};
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    let options = {
            headers: headers
        };
    return this._http.put('https://api-credit-base.herokuapp.com/api/credit', JSON.stringify(creditAndPayments), options);
  }

  updateCredit(idCredit: number, bankId: number, amountCredit: number, timeCredit: number, percentCredit: number, startingDate: string, creditMas: PaymentData[]){
    let creditAndPayments = {id_credit: idCredit, id_bank: bankId, amount: amountCredit, period: timeCredit, percent: percentCredit, date: startingDate, payments: creditMas};
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    let options = {
            headers: headers
        };
    return this._http.post('https://api-credit-base.herokuapp.com/api/credit', JSON.stringify(creditAndPayments), options);
  }

  getBank(){
    return this._http.get('https://api-credit-base.herokuapp.com/api/banks');
  }


}
export class PaymentData{
  public numOfPay: number;
  public pay: number;
  public amountOfPercent: number;
  public mainDebt: number;
  public debtOfCredit: number;
  public dateOfPay: Date;
}

export class Response{
  public status: number;
  public message: string;
}

export class BankData{
  bankId: number;
  bankName: string;
}
