import {GeoModel} from "./geo.model";

/**
 * Interface for map the address object in system
 */
export interface AddressModel {
  street?: string;
  suite?: string;
  city?: string,
  zipcode?: string,
  geo?: GeoModel;
}
