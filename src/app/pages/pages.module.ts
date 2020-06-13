import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DebtComponent} from './debt/debt.component';
import {ListDebtsComponent} from './debt/list-debts/list-debts.component';
import {ViewDebtComponent} from './debt/view-debt/view-debt.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from "../layout/layout.module";
import {NgSelectModule} from "@ng-select/ng-select";


@NgModule({
  declarations: [
    DebtComponent,
    ListDebtsComponent,
    ViewDebtComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    DebtComponent,
    ListDebtsComponent,
    ViewDebtComponent
  ]
})
export class PagesModule { }
