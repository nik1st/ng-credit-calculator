import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService, IdUser } from 'src/app/services/auth.service';
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

  public idUser: IdUser;
  public isLoginUnique = true;

  submit(myForm: NgForm){
    this._authService.createUser(myForm.value.login, myForm.value.password).subscribe((result: IdUser)=>{
      this.idUser = result; if(this.idUser.status == 1){
        this.router.navigate(['/credit']);
        this._localStorageService.setIdUser(this.idUser.id);
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
