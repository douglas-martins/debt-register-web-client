import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from './base-http';
import {BaseMock} from './base-mock';
import {Observable} from 'rxjs';
import {BaseData} from "./base-data";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends BaseData> {
  /** Ref for the mock for testing **/
  private mock: BaseMock<T>;

  /** Ref for the url service for the API request **/
  protected url: string;

  /** Ref for the service endpoint **/
  protected endpoint: string;

  /** Ref for the custom final part of endpoint */
  protected customEndpoint: string;

  /**
   * Default class constructor.
   * @param http:
   * @param _endpoint
   */
  constructor(
    protected http: BaseHttp<T>,
    @Inject(String) private _endpoint: string
  ) {
    this.url = _endpoint.length === 0 ? environment.userUrl : environment.apiUrl;
    this.mock = null;
    this.customEndpoint = '';
    this.endpoint = _endpoint.length === 0 ? 'users' : _endpoint;
  }

  /**
   * Set customEndpoint property
   * @param customEndpoint: string
   */
  set setCustomEndpoint(customEndpoint: string) {
    this.customEndpoint = customEndpoint;
  }

  /**
   * Set mock value.
   * @param value: BaseMock with the value that will be inserted on the mock.
   */
  public setMock(value: BaseMock<T>): void {
    this.mock = value;
    this.http.setMock(this.mock);
  }

  /**
   * Get the mock value.
   * @return: BaseMock<K, V> with the value of the mock.
   */
  public getMock(): BaseMock<T> {
    return this.mock;
  }

  /**
   * Convert a model to a JSON which can be sent to the server.
   */
  public convert(value: BaseMock<T>): BaseMock<T> {
    return Object.assign({}, value);
  }

  /**
   * Set the custom options for this service
   * @param custom: object with options for the custom url
   */
  public setServiceCustomUrl(custom: {withUserId: boolean, id: string}): void {
    if (!this.customEndpoint) {
      throw Error('customEndpoint has to be a valid value for the service work');
    }
    if (custom.withUserId) {
      this.setUserIdOnServiceUrl(custom.id);
      this.endpoint += '/' + this.customEndpoint;
    } else {
      this.endpoint = this._endpoint;
      this.endpoint = this.endpoint + '/' + this.customEndpoint;
    }
  }

  /**
   * Set user id as parameter on the service url.
   * @param: id: user id reference
   */
  public setUserIdOnServiceUrl(id: string): void {
    this.endpoint = this._endpoint;
    this.endpoint = id + this.endpoint;
  }

  /**
   * Create a new item data on the db.
   * @param data: T with the data that will be inserted.
   * @return: Observable<T> with the response for the request.
   */
  public create(data: T): Observable<T> {
    return this.http.post<T>(this.getUrl(), data, {observe: 'response'});
  }

  /**
   * Patch a item data on db.
   * @param data: T with the data that will be patched.
   * @return: Observable<T> with the response for the request.
   */
  public update(data: T): Observable<T> {
    return this.http.patch<T>(this.getUrl() + '/' + data['id'], data, {observe: 'response'});
  }

  /**
   * Find a item with the same id passed.
   * @param id: number with the value of id for the store item data.
   * @return: Observable<T> with the response for the request.
   */
  public find(id: number): Observable<T> {
    return this.http.get<T>(this.getUrl() + '/' + id, {observe: 'response'}, id);
  }

  /**
   * Find all data on the store item table.
   * @return: Observable<T[]> with the response for the request.
   */
  public findAll(): Observable<T[]> {
    return this.http.getAll<T>(this.getUrl(), {observe: 'response'});
  }

  /**
   * Delete the item from db.
   * @param id: number with value for the id of element that will be deleted.
   * @return: Observable<T> with the response for the request.
   */
  public delete(id: number): Observable<T> {
    return this.http.delete<T>(this.getUrl() + '/' + id, {observe: 'response'}, id);
  }

  /**
   * Get the current url for this service
   * @return: string
   */
  private getUrl(): string {
    return (this.url + '/' + this.endpoint);
  }
}
