import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDebtsComponent } from './list-debts.component';
import {ActivatedRoute} from '@angular/router';
import {BaseHttp} from '../../../shared/base/base-http';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DebtService} from '../../../shared/services/debt.service';

describe('ListDebtsComponent', () => {
  let component: ListDebtsComponent;
  let fixture: ComponentFixture<ListDebtsComponent>;
  let service: DebtService;
  let spy: jasmine.Spy;

  const debtList = [
    {
      _id: '60c6c3e081d50e552bc4f907d6',
      debtDate: new Date(),
      price: 3432.65,
      reason: '4567u6th',
      userId: 1,
    },
    {
      _id: '60c6c3e081d50e2bc4f907d6',
      debtDate: new Date(),
      price: 54.65,
      reason: '5654',
      userId: 1,
    },
    {
      _id: '60c6c3e081d50e2bc4f90447d6',
      debtDate: new Date(),
      price: 13.65,
      reason: '343',
      userId: 1,
    }
  ];

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
                get(name: string): string {
                  return '1';
                }
              }
            },
          },
        },
        BaseHttp,
        DebtService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDebtsComponent);
    component = fixture.componentInstance;

    service = fixture.debugElement.injector.get(DebtService);

    spy = spyOn(service, 'findAll').and.returnValue(of(debtList));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
