//МОДУЛИ
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaskModule} from 'ngx-mask'
import {DpDatePickerModule} from 'ng2-date-picker';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

// СЕРВИСЫ
import { LocalStorageService } from './services/local-storage.service';
import { CreditService } from './services/credit.service';
import { DbCreditsService } from './services/db-credits.service';
import { AuthService } from './services/auth.service';

// КОМПОНЕНТЫ
import { AppComponent } from './app.component';
import { CreditCalcComponent } from './credit-calc/credit-calc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DBCreditsComponent } from './db-comps/db-credits/db-credits.component';
import { DbPaymentsComponent } from './db-comps/db-payments/db-payments.component';
import { AuthFormComponent } from '../app/user-forms/auth-form/auth-form.component';
import { RegFormComponent } from '../app/user-forms/reg-form/reg-form.component';

import { AuthGuard } from '../app/auth.guard';
import { MyBarChartComponent } from './db-comps/db-credits/my-bar-chart/my-bar-chart.component';



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
    DBCreditsComponent,
    DbPaymentsComponent,
    AuthFormComponent,
    RegFormComponent,
    PageNotFoundComponent,
    MyBarChartComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    ChartsModule,
  ],
  providers: [LocalStorageService, CreditService, DbCreditsService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
