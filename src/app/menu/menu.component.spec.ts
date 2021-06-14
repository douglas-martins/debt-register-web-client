import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {MenuItemModel} from '../shared/models/menu-item.model';
import {MenuItemViewModel} from '../shared/models/menu-item-view.model';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has menu items on array from component', () => {
    component.ngOnInit();
    const itemOne = new class implements MenuItemModel {
      icon = 'far fa-plus-square';
      link = 'debt';
      name = 'Create Debt';
      view: MenuItemViewModel = new class implements MenuItemViewModel {
        description = 'Create or edit a Debt data';
        icon = '';
        title = 'Debt';
      };
    };

    const itemTwo = new class implements MenuItemModel {
      icon = 'far fa-list-alt';
      link = 'debts';
      name = 'List Client Debts';
      view: MenuItemViewModel = new class implements MenuItemViewModel {
        description = 'View, edit or delete a Debt data form this table';
        icon = '';
        title = 'Debts';
      };
    };
    expect(component.menuItems.length).toEqual(2);
    /* First menu element test */
    expect(component.menuItems[0].icon).toEqual(itemOne.icon);
    expect(component.menuItems[0].name).toEqual(itemOne.name);
    expect(component.menuItems[0].view.description).toEqual(itemOne.view.description);
    expect(component.menuItems[0].view.icon).toEqual(itemOne.view.icon);
    expect(component.menuItems[0].view.title).toEqual(itemOne.view.title);

    /* Second menu element test */
    expect(component.menuItems[1].icon).toEqual(itemTwo.icon);
    expect(component.menuItems[1].name).toEqual(itemTwo.name);
    expect(component.menuItems[1].view.description).toEqual(itemTwo.view.description);
    expect(component.menuItems[1].view.icon).toEqual(itemTwo.view.icon);
    expect(component.menuItems[1].view.title).toEqual(itemTwo.view.title);
  });
});
