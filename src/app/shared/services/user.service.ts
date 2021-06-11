import { Injectable } from '@angular/core';
import {BaseService} from '../base/base-service';
import {UserModel} from '../models/user.model';
import {BaseHttp} from '../base/base-http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<UserModel>{

  /**
   * Default class constructor
   * @param http BaseHttp class reference
   */
  constructor(
    protected http: BaseHttp<UserModel>
  ) {
    super(http, '');
  }

  /**
   * Create a new item data on the db.
   * @param data: UserModel with the data that will be inserted.
   * @return: Observable<UserModel> with the response for the request.
   * @throws: Error
   */
  public create(data: UserModel): Observable<UserModel> {
    throw new Error('This service do not user the create() method');
  }

  /**
   * Patch a item data on db.
   * @param data: UserModel with the data that will be patched.
   * @return: Observable<UserModel> with the response for the request.
   * @throws: Error
   */
  public update(data: UserModel): Observable<UserModel> {
    throw new Error('This service do not user the create() method');
  }

  /**
   * Find a item with the same id passed.
   * @param id: number with the value of id for the store item data.
   * @return: Observable<UserModel> with the response for the request.
   * @throws: Error
   */
  public find(id: number): Observable<UserModel> {
    throw new Error('This service do not user the create() method');
  }

  /**
   * Delete the item from db.
   * @param id: number with value for the id of element that will be deleted.
   * @return: Observable<UserModel> with the response for the request.
   * @throws: Error
   */
  public delete(id: number): Observable<UserModel> {
    throw new Error('This service do not user the create() method');
  }
}
