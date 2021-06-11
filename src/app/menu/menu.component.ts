import {Component, OnInit} from '@angular/core';
import {MenuItemModel} from '../shared/models/menu-item.model';
import {MenuItemViewModel} from '../shared/models/menu-item-view.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  /** Reference for the action items in menu */
  menuItems: Array<MenuItemModel>;

  /**
   * Default class constructor
   */
  constructor() {
    this.initMenuItems();
  }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Define an ngOnInit() method to handle any additional initialization tasks.
   */
  public ngOnInit(): void {
  }

  /**
   * Init the date for menu items
   */
  private initMenuItems(): void {
    this.menuItems = new Array<MenuItemModel>();
    this.menuItems.push(new class implements MenuItemModel {
      icon = 'far fa-plus-square';
      link = 'debt';
      name = 'Create Debt';
      view: MenuItemViewModel = new class implements MenuItemViewModel {
        description = 'Create or edit a Debt data';
        icon = '';
        title = 'Debt';
      };
    });

    this.menuItems.push(new class implements MenuItemModel {
      icon = 'far fa-list-alt';
      link = 'debts';
      name = 'List Client Debts';
      view: MenuItemViewModel = new class implements MenuItemViewModel {
        description = 'View, edit or delete a Debt data form this table';
        icon = '';
        title = 'Debts';
      };
    });
  }

}
