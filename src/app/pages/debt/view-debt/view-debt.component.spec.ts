import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDebtComponent } from './view-debt.component';

describe('ViewDebtComponent', () => {
  let component: ViewDebtComponent;
  let fixture: ComponentFixture<ViewDebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
