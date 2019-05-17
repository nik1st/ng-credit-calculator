import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService, User } from 'src/app/services/auth.service';
import { LocalResolver } from '@angular/compiler/src/compiler_util/expression_converter';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  constructor(private router: Router,
              private _authService: AuthService,
              private _localStorageService: LocalStorageService) { }

  public user: User;
  public isLoginUnique = true;

  submit(myForm: NgForm){
    this._authService.createUser(myForm.value.login, myForm.value.password).subscribe((result: User)=>{
      this.user = result; 
      if(this.user.status == 1){
        this.router.navigate(['/credit/allCredits']);
        this._localStorageService.setIdUser(this.user.id);
        this._localStorageService.setUserLogin( this.user.login);
      } else {
        this.isLoginUnique = false;
      }
    })
  }

  refBack(){
    this.router.navigate(['/auth']);
  }
  ngOnInit() {
  }

}
