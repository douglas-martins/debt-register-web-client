import {BaseData} from "../base/base-data";

/**
 * Interface for map the debt object in system
 */
export interface DebtModel extends BaseData {
  userId?: number;
  price?: number;
  reason?: string;
  debtDate?: Date;
}
