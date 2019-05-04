import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { CalcHisComponent } from '../calc-his/calc-his.component';
import { ExecExp2Event } from '../calc/calc/calc.component';

@Component({
  selector: 'app-calc-container',
  templateUrl: './calc-container.component.html',
  styleUrls: ['./calc-container.component.scss']
})
export class CalcContainerComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private _localStorageService: LocalStorageService){}
  @ViewChild("history") public history: CalcHisComponent;
  title = 'democalc';
  public onExpSend(item: ExecExp2Event){
    this._localStorageService.addToHistory(item);
  }
}
