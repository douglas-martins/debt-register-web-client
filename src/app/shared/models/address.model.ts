import {GeoModel} from './geo.model';
import {BaseData} from '../base/base-data';

/**
 * Interface for map the address object in system
 */
export interface AddressModel extends BaseData {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo?: GeoModel;
}
