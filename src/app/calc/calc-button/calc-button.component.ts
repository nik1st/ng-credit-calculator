import {EventEmitter, Output, Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.scss']
})
export class CalcButtonComponent implements OnInit {

    @Input() nameBut: string;
    @Input() codeBtn: OperationCode = OperationCode.type;
    @Output() clickBut = new EventEmitter<lables>();
    public onClick (event){
      let arg = new lables();
      arg.label = this.nameBut;
      arg.operationCode = this.codeBtn;
      this.clickBut.emit(arg);
    }
  ngOnInit() {
  }

}
export enum OperationCode {
  type = 0,
  enter = 1,
  backspace = 2,
  clear = 3,
  operation = 4
};
export class lables  {
  public label: string;
  public operationCode: OperationCode;
}
