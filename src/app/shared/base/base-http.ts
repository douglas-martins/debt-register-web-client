import {HttpClient, HttpHandler, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseMock} from './base-mock';
import {map} from 'rxjs/operators';
import {BaseData} from './base-data';


/**
 * Base class for any service that will use the HttpClient.
 */
@Injectable()
export class BaseHttp<U extends BaseData> extends HttpClient {
  /** Ref for the mock */
  private mock: BaseMock<U>;

  /**
   * Class default constructor.
   * @param: httpHandler
   */
  constructor(
    private httpHandler: HttpHandler
  ) {
    super(httpHandler);
  }

  /**
   * Set the mock value.
   * @param value: BaseMock<U> with the value that will be inserted.
   */
  public setMock(value: BaseMock<U>): void {
    this.mock = value;
  }

  /**
   * Delete service function.
   * @param url: string with entity that will deleted.
   * @param options: any with the values of options for the request.
   * @param id: number | string with the value of entity id.
   * @return: Observable<T | U> with the observable for the this request.
   */
  public delete<T extends BaseData>(url: string, options?: any, id: number | string = -1): Observable<T | U> {
    if (!this.mock) {
      return super.delete<T>(url, options).pipe(map(
        (response: HttpResponse<T>) => {
          return response.body;
        }));
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.delete(id));
      });
    }
  }

  /**
   * Patch service function.
   * @param url: string with entity that will patch.
   * @param body: any with the body for the patch request.
   * @param options: any with the values of options for the request.
   * @return: Observable<T | U> with the observable for the this request.
   */
  public patch<T extends BaseData>(url: string, body: any, options?: any): Observable<T | U> {
    if (!this.mock) {
      return super.patch<T>(url, body, options).pipe(map(
        (response: HttpResponse<T>) => {
          return response.body;
        }));
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.updateItem(body));
      });
    }
  }

  /**
   * Get service function.
   * @param url: string with entity that will get.
   * @param options: any with the values of options for the request.
   * @param id: number | string with the value of entity id.
   * @return: Observable<T | U> with the observable for the this request.
   */
  public get<T extends BaseData>(url: string, options?: any, id: number | string = -1): Observable<T | Array<T> | U | Array<U>> {
    if (!this.mock) {
      return super.get<T>(url, options).pipe(map(
        (response: HttpResponse<T>) => {
          return response.body;
        }));
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.findById(id));
      });
    }
  }

  /**
   * Get All service function.
   * @param url: string with entity that will get all.
   * @param options: any with the values of options for the request.
   * @return: Observable<T[] | U[]> with the observable for the this request.
   */
  public getAll<T extends BaseData>(url: string, options?: any): Observable<T[] | U[]> {
    if (!this.mock) {
      return super.get<T>(url, options).pipe(map(
        (response: HttpResponse<any>) => {
          return response.body;
        }));
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.getItemsMock());
      });
    }
  }

  /**
   * Post service function
   * @param url: string with entity that will post.
   * @param body: any with the body for the post request.
   * @param options: any with the values of options for the request.
   * @return: Observable<T | U> with the observable for the this request.
   */
  public post<T extends BaseData>(url: string, body: any, options?: any): Observable<T | U> {
    if (!this.mock) {
      return super.post<T>(url, body, options).pipe(map(
        (response: HttpResponse<T>) => {
          return response.body;
        }));
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.insertItem(body));
      });
    }
  }

  /**
   * Put service function.
   * @param url: string with entity that will post.
   * @param body: any with the put for the post request.
   * @param options: any with the values of options for the request.
   * @return: Observable<T | U> with the observable for the this request.
   */
  public put<T extends BaseData>(url: string, body: any, options?: any): Observable<T | U> {
    if (!this.mock) {
      return super.put<T>(url, body, options).pipe(map(
        (response: HttpResponse<T>) => {
          return response.body;
        }));
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.updateItem(body));
      });
    }
  }
}
