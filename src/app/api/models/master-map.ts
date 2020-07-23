/* tslint:disable */
import { MasterMapColumn } from './master-map-column';
export interface MasterMap {
  name?: string;
  tableName?: string;
  locked?: boolean;
  id?: number;
  createDT?: string;
  updateDT?: string;
  createBy?: number;
  updateBy?: number;
  deleted?: boolean;
  columns?: Array<MasterMapColumn>;
}
