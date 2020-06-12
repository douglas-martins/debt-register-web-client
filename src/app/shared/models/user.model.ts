import {Address} from "cluster";
import {CompanyModel} from "./company.model";

/**
 * Interface for map the user object in system
 */
export interface UserModel {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: CompanyModel;
}
