import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {DebtService} from "../../shared/services/debt.service";
import {DebtModel} from "../../shared/models/debt.model";
import {MenuItemViewModel} from "../../shared/models/menu-item-view.model";
import {UserService} from "../../shared/services/user.service";
import {UserModel} from "../../shared/models/user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.sass']
})
export class DebtComponent implements OnInit {

  /** Reference for the form group on this component */
  debtForm: FormGroup;

  /** Reference for the debt model */
  debt: DebtModel;

  /** Reference for the menu item view information */
  menuItemView: MenuItemViewModel;

  /** Reference for the observable  */
  users$: Observable<UserModel[]>;

  debtId: string;

  /**
   * Default class constructor
   * @param route
   * @param router
   * @param formBuilder
   * @param toastrService
   * @param userService
   * @param debtService
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService,
    private debtService: DebtService
  ) {
    this.debtId = this.route.snapshot.params.id;
    if (this.debt) {
      // this.debtService.find(this.route.snapshot.params.id).toPromise().then((data) => {
      //   this.debt = data;
      // });
    }

    this.menuItemView = new class implements MenuItemViewModel {
      description: string = 'Create or edit a Debt data';
      icon: string = '';
      title: string = 'Debt';
    };
  }

  /**
   * Get user FormControl.
   * @return: FormControl
   */
  get getUser(): FormControl {
    return this.debtForm.get('user') as FormControl;
  }

  /**
   * Get reason FormControl.
   * @return: FormControl
   */
  get getReason(): FormControl {
    return this.debtForm.get('reason') as FormControl;
  }

  /**
   * Get price FormControl.
   * @return: FormControl
   */
  get getPrice(): FormControl {
    return this.debtForm.get('price') as FormControl;
  }

  /**
   * Get debtDate FormControl.
   * @return: FormControl
   */
  get getDebtDate(): FormControl {
    return this.debtForm.get('debtDate') as FormControl;
  }

  /**
   * Get if user FormControl has errors and is touched or dirty.
   * @return: boolean
   */
  get getUserHasErrors(): boolean {
    return (this.getUser.touched || this.getUser.dirty) && this.getUser.invalid;
  }

  /**
   * Get if reason FormControl has errors and is touched or dirty.
   * @return: boolean
   */
  get getReasonHasErrors(): boolean {
    return (this.getReason.touched || this.getReason.dirty) && this.getReason.invalid;
  }

  /**
   * Get if price FormControl has errors and is touched or dirty.
   * @return: boolean
   */
  get getPriceHasErrors(): boolean {
    return (this.getPrice.touched || this.getPrice.dirty) && this.getPrice.invalid;
  }

  /**
   * Get if debtDate FormControl has errors and is touched or dirty.
   * @return: boolean
   */
  get getDebtDateHasErrors(): boolean {
    return (this.getDebtDate.touched || this.getDebtDate.dirty) && this.getDebtDate.invalid;
  }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Define an ngOnInit() method to handle any additional initialization tasks.
   */
  public ngOnInit(): void {
    this.initForm();
    this.users$ = this.userService.findAll();

    const $this = this;
    this.debt = new class implements DebtModel {
      id: string = $this.debtId;
      debtDate: Date = null;
      price: number = null;
      reason: string = null;
      userId: number = 1;
    }
  }

  /**
   * Save the information on form
   */
  public save(): void {
    this.updateFormInputs();
    if (this.debtForm.valid) {
      console.log(this.debt);
      this.persistModelValues();
    }
  }

  /**
   * Initiate form data
   */
  private initForm(): void {
    this.debtForm = this.formBuilder.group({
      user: [null, [Validators.required]],
      reason: [null, [Validators.required]],
      price: [null, [Validators.required]],
      debtDate: [null, [Validators.required]]
    });
  }

  /**
   * Try to validate all FormControls in FormGroup for submit the form.
   */
  private updateFormInputs(): void {
    let hasErrors = false;
    for (const key of Object.keys(this.debtForm.controls)) {
      const formControl: FormControl = this.debtForm.controls[key] as FormControl;
      formControl.updateValueAndValidity();
      formControl.markAllAsTouched();

      if (formControl.invalid && !hasErrors) {
        hasErrors = true;
      }
    }

    if (hasErrors) {
      this.toastrService.error('Some fields are not correct filled', 'Error On Save', {timeOut: 3000});
    }
  }

  private persistModelValues(): void {
    if (this.debtId) {
      this.debtService.update(this.debt).toPromise().then((data) => {
        // TODO: redirect to list
        console.log(data);
      }).catch((error) => {
        console.log(error);
        this.toastrService.error('The application has a problem to save this form. Please contact the support or try again.' ,'Error On Save', {timeOut: 3000});
      });
    } else {
      this.debtService.create(this.debt).toPromise().then((data) => {
        // TODO: redirect to list
        console.log(data);
      }).catch((error) => {
        console.log(error);
        this.toastrService.error('The application has a problem to save this form. Please contact the support or try again.' ,'Error On Save', {timeOut: 3000});
      });
    }
  }

}
