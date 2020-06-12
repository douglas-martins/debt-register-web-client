import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DebtComponent} from './debt/debt.component';
import {ListDebtsComponent} from './list-debts/list-debts.component';
import {ViewDebtComponent} from './view-debt/view-debt.component';


@NgModule({
  declarations: [
    DebtComponent,
    ListDebtsComponent,
    ViewDebtComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DebtComponent,
    ListDebtsComponent,
    ViewDebtComponent
  ]
})
export class PagesModule { }
