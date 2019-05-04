import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, IdUser } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  constructor(private _authService: AuthService,
              private router: Router,
              private _localStorageService: LocalStorageService) { }

  public idUser: IdUser;
  public isWrongData = false;

  submit(myForm: NgForm){
    this._authService.getUser(myForm.value.login, myForm.value.password).subscribe((result: IdUser)=>{
      this.idUser = result; if(this.idUser.status == 1){
        this.router.navigate(['/credit']);
        this._localStorageService.setIdUser(this.idUser.id);
        this._authService.userLogin = myForm.value.login;

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
