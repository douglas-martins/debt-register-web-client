import { Injectable } from '@angular/core';
import {BaseService} from '../base/base-service';
import {DebtModel} from '../models/debt.model';
import {BaseHttp} from '../base/base-http';

@Injectable({
  providedIn: 'root'
})
export class DebtService extends BaseService<DebtModel> {

  /**
   * Default class constructor
   * @param http BaseHttp class reference
   */
  constructor(
    protected http: BaseHttp<DebtModel>
  ) {
    super(http, 'debt');
  }
}
