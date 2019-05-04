import {EventEmitter, Output, Component, OnInit } from '@angular/core';
import { lables } from '../calc-button/calc-button.component';

@Component({
  selector: 'app-button-pad',
  templateUrl: './button-pad.component.html',
  styleUrls: ['./button-pad.component.scss']
})
export class ButtonPadComponent implements OnInit {

  @Output() clickBut = new EventEmitter<lables>();
  public onCalcBtnClick (event){
    this.clickBut.emit(event);
  }

  ngOnInit() {
  }

}
