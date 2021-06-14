import { TestBed } from '@angular/core/testing';

import { DebtService } from './debt.service';
import {BaseHttp} from '../base/base-http';
import {HttpHandler} from '@angular/common/http';

describe('DebtService', () => {
  let service: DebtService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseHttp, HttpHandler]
    });
    service = TestBed.inject(DebtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
