import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DebtComponent} from './debt/debt.component';
import {ListDebtsComponent} from './debt/list-debts/list-debts.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from "../layout/layout.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {DebtService} from "../shared/services/debt.service";
import {ToastrService} from "ngx-toastr";
import {NgxCurrencyModule} from "ngx-currency";


@NgModule({
  declarations: [
    DebtComponent,
    ListDebtsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    NgSelectModule,
    FormsModule,
    NgxCurrencyModule
  ],
  providers: [
    DebtService,
    ToastrService
  ],
  exports: [
    DebtComponent,
    ListDebtsComponent
  ]
})
export class PagesModule { }
