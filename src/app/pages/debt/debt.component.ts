import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {DebtService} from "../../shared/services/debt.service";
import {DebtModel} from "../../shared/models/debt.model";
import {MenuItemViewModel} from "../../shared/models/menu-item-view.model";

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

  /**
   * Default class constructor
   * @param route
   * @param router
   * @param formBuilder
   * @param toastrService
   * @param debtService
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private debtService: DebtService
  ) {
    if (this.route.snapshot.params.id) {
      this.debtService.find(this.route.snapshot.params.id).toPromise().then((data) => {
        this.debt = data;
      });
    }
  }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Define an ngOnInit() method to handle any additional initialization tasks.
   */
  public ngOnInit(): void {
  }

  /**
   * Save the information on form
   */
  public save(): void {

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

}
