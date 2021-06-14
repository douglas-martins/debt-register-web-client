import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDebtsComponent } from './list-debts.component';
import {ActivatedRoute} from '@angular/router';
import {BaseHttp} from '../../../shared/base/base-http';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ListDebtsComponent', () => {
  let component: ListDebtsComponent;
  let fixture: ComponentFixture<ListDebtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      declarations: [ ListDebtsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
            snapshot: {
              parent: {
                params: {
                  id: 1
                }
              },
              paramMap: {
                get(name: string): string | number {
                  return 1;
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
    fixture = TestBed.createComponent(ListDebtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
