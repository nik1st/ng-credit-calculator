import {EventEmitter,Input, Output, Component, OnInit } from '@angular/core';
import { lables, OperationCode } from '../calc-button/calc-button.component';
@Component({
  selector: 'app-output-window',
  templateUrl: './output-window.component.html',
  styleUrls: ['./output-window.component.scss']
})
export class OutputWindowComponent implements OnInit {

  masKeys: string[] = ['+','-','*','/', '0','1','2','3','4','5','6','7','8','9','(',')',];
  @Input()public expressionValue: string;
  @Output() clickSymb = new EventEmitter<lables>();
  public onKey(event: KeyboardEvent){
   let keycode = new lables();
   keycode.label = event.key;
   keycode.operationCode = OperationCode.type;
   if(this.masKeys.indexOf(keycode.label) >= 0){
   this.clickSymb.emit(keycode);
   event.preventDefault();
   }
   if(event.keyCode !== 16){
    event.preventDefault();
  }
   if(event.keyCode == 8) {
    keycode.label = '';
    keycode.operationCode = OperationCode.backspace;
    this.clickSymb.emit(keycode);
   }
   if(event.keyCode == 13){
     keycode.label = '';
    keycode.operationCode = OperationCode.enter;
    this.clickSymb.emit(keycode);
    event.preventDefault();
   }

}
  ngOnInit() {
  }

}
