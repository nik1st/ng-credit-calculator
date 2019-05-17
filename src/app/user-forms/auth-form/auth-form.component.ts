import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, User } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  public user: User;
  public isWrongData = false;


  constructor(private _authService: AuthService,
                    private router: Router,
                    private _localStorageService: LocalStorageService) { }



  submit(myForm: NgForm){
    this._authService.getUser(myForm.value.login, myForm.value.password).subscribe((result: User)=>{
      this.user = result;
      if(this.user.status == 1){
        this.router.navigate(['/credit/allCredits']);
        this._localStorageService.setIdUser(this.user.id);
        this._localStorageService.setUserLogin(this.user.login);
      } else {
       this.isWrongData = true;
      }
    })
  }

  referenceToReg(){
    this.router.navigate(['/reg']);
  }

  ngOnInit() {
  }

}
