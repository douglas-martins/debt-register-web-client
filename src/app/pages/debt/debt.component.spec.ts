import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtComponent } from './debt.component';
import {ActivatedRoute} from '@angular/router';
import {BaseHttp} from '../../shared/base/base-http';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {of} from 'rxjs';
import {NgSelectModule} from '@ng-select/ng-select';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DebtComponent', () => {
  let component: DebtComponent;
  let fixture: ComponentFixture<DebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, ReactiveFormsModule, NgSelectModule, HttpClientTestingModule, ToastrModule.forRoot()
      ],
      declarations: [ DebtComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ }),
            snapshot: {
              parent: {
                params: {
                  // id: 1
                }
              },
              paramMap: {
                get(name: string): string | number {
                  return null;
                }
              }
            },
          },
        },
        BaseHttp,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
