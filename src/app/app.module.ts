import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LocalStorageService } from './services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { CreditService } from './services/credit.service';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import {NgxMaskModule} from 'ngx-mask'
import {DpDatePickerModule} from 'ng2-date-picker';
import { CreditCalcComponent } from './credit-calc/credit-calc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { DBCreditsComponent } from './db-comps/db-credits/db-credits.component';
import { DbPaymentsComponent } from './db-comps/db-payments/db-payments.component';
import { DbCreditsService } from './services/db-credits.service';

import { AuthGuard } from '../app/auth.guard';
import { AuthFormComponent } from '../app/user-forms/auth-form/auth-form.component';
import { AuthService } from './services/auth.service';
import { RegFormComponent } from '../app/user-forms/reg-form/reg-form.component';

const appRoutes: Routes = [
  {path:'', redirectTo: 'credit', pathMatch: 'full'},
  {path: 'credit', component: CreditCalcComponent},
  {path: 'credit/allCredits', component: DBCreditsComponent, canActivate: [AuthGuard]},
  {path: 'credit/allCredits/payments/:id', component: DbPaymentsComponent},
  {path: 'auth', component: AuthFormComponent},
  {path: 'reg', component: RegFormComponent},
  {path: '**', component: PageNotFoundComponent}
  ];



@NgModule({
  declarations: [
    AppComponent,
    CreditCalcComponent,
    PageNotFoundComponent,
    DBCreditsComponent,
    DbPaymentsComponent,
    AuthFormComponent,
    RegFormComponent,
  ],
  imports: [
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule
  ],
  providers: [LocalStorageService, CreditService, DbCreditsService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
