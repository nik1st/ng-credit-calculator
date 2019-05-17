import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 
  userEvent = new Subject();

  public setIdUser(idUser) {
    localStorage.setItem('IdUser', JSON.stringify(idUser));
  }


  public setUserLogin ( Login) {
    this.userEvent.next(Login); 
    localStorage.setItem('Login', JSON.stringify(Login));
  }

  public getIdUser() {
    const idJson = localStorage.getItem('IdUser');
    let id = JSON.parse(idJson);
    return id;
  }

  public getLogin() {
    const loginJson = localStorage.getItem('Login');
    let login = JSON.parse(loginJson);
    this.userEvent.next(login);
    return login;
  }

  public removeUser() {
    this.userEvent.next(null);
    localStorage.removeItem('IdUser');
    localStorage.removeItem('Login');
  }

  constructor() {}
}
