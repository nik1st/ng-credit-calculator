import { Component, OnInit } from '@angular/core';
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

 userLogin = this._authService.userLogin;

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

  exit(){
    this._authService.exit();
  }

  
  ngOnInit() {
    this.getCredits();

  }

}
