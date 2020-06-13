import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {DebtComponent} from "./pages/debt/debt.component";
import {ListDebtsComponent} from "./pages/debt/list-debts/list-debts.component";


const routes: Routes = [
  {path: '/', component: MenuComponent},
  {path: '/debt', component: DebtComponent},
  {path: '/debt/:id', component: DebtComponent},
  {path: '/debts', component: ListDebtsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
