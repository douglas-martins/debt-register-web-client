import {BaseData} from "../base/base-data";

/**
 * Interface for map the geolocation object in system
 */
export interface GeoModel extends BaseData {
  lat?: string;
  lng?: string;
}
