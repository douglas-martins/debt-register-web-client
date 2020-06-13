import { Component, OnInit } from '@angular/core';
import {MenuItemModel} from "../shared/models/menu-item.model";
import {MenuItemViewModel} from "../shared/models/menu-item-view.model";

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
   * Init the items the menu have
   */
  private initMenuItems(): void {
    this.menuItems = new Array<MenuItemModel>();
    this.menuItems.push(new class implements MenuItemModel {
      icon: string = 'far fa-plus-square';
      link: string = '';
      name: string = 'Create Debt';
      view: MenuItemViewModel = new class implements MenuItemViewModel {
        description: string = 'Create or edit a Debt data';
        icon: string = '';
        title: string = 'Debt';
      };
    });

    this.menuItems.push(new class implements MenuItemModel {
      icon: string = 'far fa-list-alt';
      link: string = '';
      name: string = 'List Client Debts';
      view: MenuItemViewModel = new class implements MenuItemViewModel {
        description: string = 'View, edit or delete a Debt data form this table';
        icon: string = '';
        title: string = 'Debts';
      };
    });
  }

}
