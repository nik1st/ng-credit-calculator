import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient,
              private router: Router,
              private _localStorageService: LocalStorageService) { }

  public userLogin: string;


  getUser(loginForm, passwordForm){
    let userData = {login: loginForm, password: passwordForm};
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    let options = {
            headers: headers
        };
    return this._http.post('https://api-credit-base.herokuapp.com/api/user', JSON.stringify(userData), options);
  }

  createUser(loginForm, passwordForm){
    let userData = {login: loginForm, password: passwordForm};
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    let options = {
            headers: headers
        };
    return this._http.put('https://api-credit-base.herokuapp.com/api/user', JSON.stringify(userData), options);
  }
  exit(){
    this._localStorageService.removeIdUser();
    this.router.navigate(['/auth']);
  }

}

export class IdUser{
  public status: number;
  public id: number;
}
