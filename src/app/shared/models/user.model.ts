import {CompanyModel} from "./company.model";
import {BaseData} from "../base/base-data";
import {AddressModel} from "./address.model";

/**
 * Interface for map the user object in system
 */
export interface UserModel extends BaseData {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: AddressModel;
  phone?: string;
  website?: string;
  company?: CompanyModel;
}
