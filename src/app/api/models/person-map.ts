/* tslint:disable */
import { PersonMapColumn } from './person-map-column';
export interface PersonMap {
  createDT?: string;
  id?: number;
  personId: number;
  masterMapId: number;
  locked?: boolean;
  name: string;
  updateDT?: string;
  createBy?: number;
  updateBy?: number;
  deleted?: boolean;
  columns?: Array<PersonMapColumn>;
}
