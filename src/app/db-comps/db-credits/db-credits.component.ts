import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbCreditsService, CreditData } from '../../services/db-credits.service';
import { CreditService, BankData} from 'src/app/services/credit.service';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-db-credits',
  templateUrl: './db-credits.component.html',
  styleUrls: ['./db-credits.component.scss']
})
export class DBCreditsComponent implements OnInit {

  constructor(private _DbCreditsService: DbCreditsService,
                    private _creditService: CreditService) {
                      this.barChartLabels = [];
                     }


  barChartLabels: Label [];
  barChartData: ChartDataSets [];

  credits : CreditData [] = [];
  pageIsLoaded = false;


  getCredits() {
    this._DbCreditsService.getCredits().subscribe((result1: CreditData[]) =>{
      this._creditService.getBank().subscribe((result2: BankData[]) => {
        this.credits = result1;
        let dataAmount = [];
        let dataPercents = [];
        for(let i = 0; i < this.credits.length; i++) {
          this.barChartLabels.push('Кредит № ' + this.credits[i].id);
          dataAmount.push(this.credits[i].amount);
          dataPercents.push(this.credits[i].sum);
          this.credits[i].bankName = result2[i].bankName;
        }
        this.barChartData = [{data: dataAmount, label: 'Сумма кредита'},
                                          {data: dataPercents, label:'Начисленные проценты'}];
                                          
      })
    });
  }


  deleteCredit(idCredit) {
  const subscription =  this._DbCreditsService.deleteCredit(idCredit).subscribe(() => subscription.unsubscribe());
  window.location.reload();
  }

  
  ngOnInit() {
    this.getCredits();
    this.pageIsLoaded = true;
  }

}
