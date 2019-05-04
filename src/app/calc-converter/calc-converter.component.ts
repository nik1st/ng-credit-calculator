import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calc-converter',
  templateUrl: './calc-converter.component.html',
  styleUrls: ['./calc-converter.component.scss']
})
export class CalcConverterComponent implements OnInit {

  resultCurrencyCode: string;
  convertForm: FormGroup;
  result: number;
  isResult: boolean;

  directConversion(convertForm: FormGroup){
   this.convertForm.markAsTouched();
   this.resultCurrencyCode = this.convertForm.controls['radioButton'].value;
   if(this.convertForm.valid){
   this.isResult = true;
   return this.result = this._currencyService.directConversion(this.convertForm.controls['radioButton'].value, this.convertForm.controls['amountField'].value);
   } else{
     return this.isResult = false;
   }
  }
  reverseConversion(convertForm: FormGroup){
    this.convertForm.markAsTouched();
    this.resultCurrencyCode = "RUB ";
    if(this.convertForm.valid){
      this.isResult = true;
     return this.result = this._currencyService.reverseConversion(this.convertForm.controls['radioButton'].value, this.convertForm.controls['amountField'].value);
    } else{
      return this.isResult = false;
    }
   }
   clearForm(convertForm: FormGroup){
    this.convertForm.reset();
    delete this.result;

   }
  constructor(public _currencyService: CurrencyService) {
    this.convertForm = new FormGroup({
      radioButton: new FormControl('', Validators.required),
      amountField: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern('^[0-9]*[.,]?[0-9]+$')])
    });
  }

  ngOnInit() {
    this._currencyService.rates = [];
    this._currencyService.loadCurrencies();
  }

}
