import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../services/local-storage.service";
import { ExecExp2Event } from '../calc/calc/calc.component';

@Component({
  selector: 'app-calc-his',
  templateUrl: './calc-his.component.html',
  styleUrls: ['./calc-his.component.scss']
})
export class CalcHisComponent implements OnInit {
  constructor(public _localStorageService: LocalStorageService){}

  addToHistory(item: ExecExp2Event){
      this._localStorageService.addToHistory(item);
  }
  clearAll(){
    this._localStorageService.clearAll();
  }
  clearNote(item: ExecExp2Event){
    this._localStorageService.clearNote(item);
  }
  ngOnInit() {
      this._localStorageService.readHistory();
  }

}
