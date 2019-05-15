import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 
  public setIdUser (idUser){
    localStorage.setItem('IdUser', JSON.stringify(idUser));
  }

  public getIdUser(){
    const idJson = localStorage.getItem('IdUser');
    let id = JSON.parse(idJson);
    return id;
  }

  public removeIdUser(){
    localStorage.removeItem('IdUser');
  }

  constructor() {}
}
