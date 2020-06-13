import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDebtsComponent } from './list-debts.component';

describe('ListDebtsComponent', () => {
  let component: ListDebtsComponent;
  let fixture: ComponentFixture<ListDebtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDebtsComponent ]
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
