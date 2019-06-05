import { Component, OnInit, ViewChild } from '@angular/core';
import { DbCreditsService, CreditData } from '../../services/db-credits.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import {DatePickerDirective} from 'ng2-date-picker';
import { IDatePickerConfig } from 'ng2-date-picker';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditService, BankData, PaymentData, Response, Message } from '../../services/credit.service';


@Component({
  selector: 'app-db-payments',
  templateUrl: './db-payments.component.html',
  styleUrls: ['./db-payments.component.scss']
})
export class DbPaymentsComponent implements OnInit {

  creditForm: FormGroup;
  @ViewChild('dateDirectivePicker') datePickerDirective: DatePickerDirective;
  config: IDatePickerConfig = {
    format: 'DD.MM.YYYY',
    disableKeypress: true,
    showMultipleYearsNavigation: true,
    enableMonthSelector: true
  };

  private subscription: Subscription;
  private id: number;
  creditDataForChart = new Subject<number>();

  
  payments: PaymentData[] = [];
  credit = new CreditData();
  bankMas: BankData[] = [];
  creditRes: Message;
  summary: number = 0;

  donePayments = false;
  doneCredit = false;
  isSaved = false;
  isCalculated = false;

  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';
  public pieChartColors = [
    {
      backgroundColor : ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)']
    }
  ];
  public pieChartLegend = true;


  constructor(private _DbCreditsService: DbCreditsService,
                    private _creditService: CreditService,
                    private _activateRoute: ActivatedRoute) {
    this.creditForm = new FormGroup({
      amountOfCredit: new FormControl(0, [Validators.required, Validators.min(0)]),
      timeOfCredit: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(360)]),
      percentOfCredit: new FormControl(10, [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$')]),
      startingDate: new FormControl(null, Validators.required),
      bankId: new FormControl(Validators.required),
      radioButton: new FormControl('', Validators.required)
    });

    this.subscription = _activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  
  getPayments(idCredit){
  this._DbCreditsService.getPayments(idCredit)
  .subscribe((result: PaymentData[]) => {
    this.payments = result;
    this.donePayments = true;});
  }


  getBanks(){
    this._creditService.getBank().subscribe((result: BankData[])=>
    {this.bankMas = result;})
  }


  getOneCredit(idCredit){
    this._DbCreditsService.getOneCredit(idCredit)
    .subscribe((result: CreditData)=>{
      this.credit = result;
      this.doneCredit = true;

      let data = this.credit.dateStarting.slice(0, 10),
       masData = data.split('-',3),
       modData = masData[2] +'.'+ masData[1] +'.'+ masData[0];

      let modCredit = {
      amountOfCredit: this.credit.amount,
      timeOfCredit: this.credit.paymentPeriod,
      percentOfCredit: this.credit.percent,
      startingDate: modData,
      bankId: this.credit.idBank,
      radioButton: this.credit.type
    }
    this.summary = this.credit.sum;
    this.creditForm.reset(modCredit);});
  }


  calculateCredit(creditForm: FormGroup){
    this.creditForm.markAsTouched();
    this.payments = [];
    this.credit.amount = this.creditForm.controls['amountOfCredit'].value;
    if(creditForm.valid){
      let type = parseInt(this.creditForm.controls['radioButton'].value)
      let date = this.creditForm.controls['startingDate'].value.split('.');
      let day = parseInt(date[0]);
      let month = parseInt(date[1]);
      let year = parseInt(date[2]);
      let modifiedDate = new Date(year,month-1,day);
      this.isCalculated = true;
     this._creditService.calculateCredit(this.creditForm.controls['amountOfCredit'].value, this.creditForm.controls['timeOfCredit'].value, this.creditForm.controls['percentOfCredit'].value, modifiedDate, type)
     .subscribe((result: Response)=>{
       this.payments = result.paymentMas;
       this.summary = Math.round(result.summary *100) / 100;
    });
    } else return;
  }


  updateCredit(creditForm: FormGroup){
    let type = parseInt(this.creditForm.controls['radioButton'].value)
    let dateOfCredit = this.creditForm.controls['startingDate'].value.split('.');
    let day = dateOfCredit[0];
    let month = dateOfCredit[1];
    let year = dateOfCredit[2];
    let modifiedDate = year + '-' + month + '-' + day;
    this._creditService.updateCredit(this.id, this.creditForm.controls['bankId'].value, this.creditForm.controls['amountOfCredit'].value, this.creditForm.controls['timeOfCredit'].value, this.creditForm.controls['percentOfCredit'].value, modifiedDate, type, this.summary, this.payments)
    .subscribe((data: Message)=>{this.creditRes = data; this.isSaved = true;}),
     error => console.log(error);
  }


  clearForm(creditForm){
    this.getOneCredit(this.id);
    this.getPayments(this.id);
    this.isSaved = false;

  }


  ngOnInit() {
    this.getPayments(this.id);
    this.getOneCredit(this.id);
    this.getBanks();
  }

}
