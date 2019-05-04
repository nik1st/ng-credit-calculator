import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc/calc.component';
import { OutputWindowComponent } from './output-window/output-window.component';
import { ButtonPadComponent } from './button-pad/button-pad.component';
import { CalcButtonComponent } from './calc-button/calc-button.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalcComponent,OutputWindowComponent, ButtonPadComponent, CalcButtonComponent],
  exports: [CalcComponent],
})
export class CalcModule { }
