import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcModule } from './calc/calc.module';
import { CalcHisComponent } from './calc-his/calc-his.component';

import { LocalStorageService } from './services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRatesService } from './services/exchange-rates.service';
import { CurrencyService } from './services/currency.service';
import { CreditService } from './services/credit.service';
import { CalcConverterComponent } from './calc-converter/calc-converter.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import {NgxMaskModule} from 'ngx-mask'
import {DpDatePickerModule} from 'ng2-date-picker';
import { CreditCalcComponent } from './credit-calc/credit-calc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { CalcContainerComponent } from './calc-container/calc-container.component';
import { DBCreditsComponent } from './db-comps/db-credits/db-credits.component';
import { DbPaymentsComponent } from './db-comps/db-payments/db-payments.component';
import { DbCreditsService } from './services/db-credits.service';

import { AuthGuard } from '../app/auth.guard';
import { AuthFormComponent } from '../app/user-forms/auth-form/auth-form.component';
import { AuthService } from './services/auth.service';
import { RegFormComponent } from '../app/user-forms/reg-form/reg-form.component';

const appRoutes: Routes = [
  {path:'', redirectTo: 'calc', pathMatch: 'full'},
  {path: 'calc', component: CalcContainerComponent},
  {path: 'credit', component: CreditCalcComponent, canActivate: [AuthGuard]},
  {path: 'credit/allCredits', component: DBCreditsComponent},
  {path: 'credit/allCredits/payments/:id', component: DbPaymentsComponent},
  {path: 'auth', component: AuthFormComponent},
  {path: 'reg', component: RegFormComponent},
  {path: '**', component: PageNotFoundComponent}
  ];



@NgModule({
  declarations: [
    AppComponent,
    CalcHisComponent,
    CalcConverterComponent,
    CreditCalcComponent,
    PageNotFoundComponent,
    CalcContainerComponent,
    DBCreditsComponent,
    DbPaymentsComponent,
    AuthFormComponent,
    RegFormComponent,
  ],
  imports: [
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CalcModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule
  ],
  providers: [LocalStorageService, ExchangeRatesService, CurrencyService, CreditService, DbCreditsService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
