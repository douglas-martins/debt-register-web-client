import {Address} from "cluster";
import {CompanyModel} from "./company.model";
import {BaseData} from "../base/base-data";

/**
 * Interface for map the user object in system
 */
export interface UserModel extends BaseData {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: CompanyModel;
}
