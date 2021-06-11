import {MenuItemViewModel} from '../../../shared/models/menu-item-view.model';
import {Observable} from 'rxjs';
import {UserModel} from '../../../shared/models/user.model';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../shared/services/user.service';
import {OnInit} from '@angular/core';

/**
 * Abstract class fro group the Debt commons actions and properties
 */
export abstract class DebtCommons implements OnInit {
  /** Reference for the menu item view information */
  menuItemView: MenuItemViewModel;

  /** Reference for the observable  */
  users$: Observable<UserModel[]>;

  /** Reference for the users on system */
  users: Array<UserModel>;

  /** Reference for the debt id */
  debtId: string;

  /**
   * Default class constructor
   * @param route angular default ActivatedRoute reference
   * @param userService UserService reference
   * @param newMenuItemView MenuItemViewModel reference menu data
   */
  constructor(
    protected route: ActivatedRoute,
    protected userService: UserService,
    private newMenuItemView: MenuItemViewModel
  ) {
    this.debtId = this.route.snapshot.paramMap.get('id');
    this.menuItemView = newMenuItemView;
  }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Define an ngOnInit() method to handle any additional initialization tasks.
   */
  public ngOnInit(): void {
    this.users$ = this.userService.findAll();
  }

  /**
   * Get users from url
   * @return: Promise<Array<UserModel>>
   */
  public async getUsers(): Promise<Array<UserModel>> {
    return await new Promise<Array<UserModel>>(async (resolve) => {
      await this.users$.toPromise().then(async (data) => {
        this.users = new Array<UserModel>();
        this.users = data;
        resolve(data);
      });
    });
  }

}
