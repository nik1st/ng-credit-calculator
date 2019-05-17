import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userLogin: any = null;

  constructor (private _localStorageService: LocalStorageService,
                      private _authService: AuthService){ }

  getLogin() {
    this.userLogin = this._localStorageService.getLogin();
    this._localStorageService.userEvent.subscribe((nextLogin) => {this.userLogin = nextLogin;})
  }

  exit(){
    this._authService.exit();
  }


  ngOnInit() {
    this.getLogin();
  }
 }
