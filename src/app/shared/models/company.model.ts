import {BaseData} from '../base/base-data';

/**
 * Interface for map the company object in system
 */
export interface CompanyModel extends BaseData {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}
