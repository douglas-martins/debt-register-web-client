import {BaseData} from '../base/base-data';
import {MenuItemViewModel} from './menu-item-view.model';

/**
 * Interface for map the menu item object in system
 */
export interface MenuItemModel extends BaseData {
  name?: string;
  icon?: string;
  link?: string;
  view?: MenuItemViewModel;
}
