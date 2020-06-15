import {Component, OnInit} from '@angular/core';
import {DebtCommons} from "../debt-commons/debt-commons";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import {MenuItemViewModel} from "../../../shared/models/menu-item-view.model";
import {DebtModel} from "../../../shared/models/debt.model";
import {DebtService} from "../../../shared/services/debt.service";
import {ToastrService} from "ngx-toastr";
import {UserModel} from "../../../shared/models/user.model";

@Component({
  selector: 'app-list-debts',
  templateUrl: './list-debts.component.html',
  styleUrls: ['./list-debts.component.sass']
})
export class ListDebtsComponent extends DebtCommons implements OnInit {

  /** Reference for debts on the user selected */
  debts: Array<DebtModel> | DebtModel;

  /** Reference for the user selected for view his debts */
  userSelected: UserModel;

  /** Reference for the keys on the table of information */
  keys: Array<string>;

  /**
   * Default class constructor.
   * @param route
   * @param userService
   * @param debtService
   * @param router
   * @param toastrService
   */
  constructor(
    protected route: ActivatedRoute,
    protected userService: UserService,
    private debtService: DebtService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    super(route, userService, new class implements MenuItemViewModel {
      description: string = 'List all Debt data from a user';
      icon: string = '';
      title: string = 'Debts';
    });
  }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Define an ngOnInit() method to handle any additional initialization tasks.
   */
  public ngOnInit(): void {
    super.ngOnInit();
    this.initTableKeys();

    this.getUsers().then(() => {
      const id: number = +this.route.snapshot.paramMap.get('id');
      if (id) {
        this.userSelected = this.users.find(user => user.id === id);
      } else {
        this.userSelected = this.users[0];
      }
      this.getUserDebts(this.userSelected);
    });
  }

  /**
   * Redirect user for the debt register page with the form filled.
   * @param debt: DebtModel
   */
  public editDebt(debt: DebtModel): void {
    this.router.navigateByUrl('debt/' + debt._id, {state: {debt: debt}});
  }

  /**
   * Remove a element from the base.
   * @param id: number | string with value of id for the object that will be deleted.
   */
  public removeDebt(id: string): void {
    this.debtService.setCustomEndpoint = '';
    this.debtService.delete(id).toPromise().then(() => {
      this.debtService.setCustomEndpoint = 'all/' + this.userSelected.id;
      this.debtService.findAll().toPromise().then((data) => {
        this.debts = data;
      }).catch((error) => {
        console.log(error);
        this.toastrService.error('The application has a problem to list data. Please contact the support or try again.' ,'Error On List Data', {timeOut: 3000});
      });
    }).catch((error) => {
      console.log(error);
      this.toastrService.error('The application has a problem to delete data. Please contact the support or try again.' ,'Error On Delete', {timeOut: 3000});
    });
  }

  /**
   *
   * @param user
   */
  public getUserDebts(user: UserModel | number): void {
    const id: number = typeof user === "number" ? user : user.id;
    // /all/:userId
    this.debtService.setCustomEndpoint = 'all';
    this.debtService.find(id).toPromise().then((data) => {
      this.debts = data;
    });
  }

  /**
   * Populate the keys for table
   */
  private initTableKeys(): void {
    this.keys = new Array<string>();
    this.keys.push('User Name');
    this.keys.push('Debt Reason');
    this.keys.push('Debt Price');
    this.keys.push('Debt Date');
  }

}
