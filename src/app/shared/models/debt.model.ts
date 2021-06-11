import {BaseData} from '../base/base-data';
import {UserModel} from './user.model';

/**
 * Interface for map the debt object in system
 */
export interface DebtModel extends BaseData {
  _id?: string;
  userId?: number;
  user?: UserModel;
  price?: number;
  reason?: string;
  debtDate?: Date;
}
