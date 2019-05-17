import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbCreditsService, CreditData } from '../../services/db-credits.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-db-credits',
  templateUrl: './db-credits.component.html',
  styleUrls: ['./db-credits.component.scss']
})
export class DBCreditsComponent implements OnInit {

  constructor(private _DbCreditsService: DbCreditsService,
                    private _authService: AuthService) { }

@Output() isOut = new EventEmitter<boolean>();


  credits : CreditData[] = [];

  done = false;
  

  getCredits(){
    this._DbCreditsService.getCredits()
    .subscribe((result: CreditData[]) =>{this.credits = result; this.done = true;});
  }

  deleteCredit(idCredit){
    this._DbCreditsService.deleteCredit(idCredit).subscribe();
    this.getCredits();
  }


  
  ngOnInit() {
    this.getCredits();

  }

}
