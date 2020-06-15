import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DebtComponent} from "./pages/debt/debt.component";
import {ListDebtsComponent} from "./pages/debt/list-debts/list-debts.component";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'debt', component: DebtComponent},
  {path: 'debt/:id', component: DebtComponent},
  {path: 'debts', component: ListDebtsComponent},
  {path: 'debts/:id', component: ListDebtsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
