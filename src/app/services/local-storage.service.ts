import { Injectable } from '@angular/core';
import { ExecExp2Event } from '../calc/calc/calc.component';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public historyItems: ExecExp2Event[] = [];

  private setItemToStorage() {
    localStorage.setItem('calc-history', JSON.stringify(this.historyItems));
  }
  public addToHistory(item: ExecExp2Event) {
    this.historyItems.push(item);
    this.setItemToStorage();
  }
  public getHistory() {
    return this.historyItems;
  }
  public readHistory() {
    const history = localStorage.getItem('calc-history');
    this.historyItems = JSON.parse(history);
    if(this.historyItems === undefined || this.historyItems === null){
      this.historyItems = [];
    }
  }
  public clearAll() {
    localStorage.removeItem('calc-history');
    this.historyItems = [];
  }
   public clearNote(item: ExecExp2Event) {
      let numOfNote = this.historyItems.indexOf(item);
      if(numOfNote > -1){
      this.historyItems.splice(numOfNote, 1);
      }
      this.setItemToStorage();
  }

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
