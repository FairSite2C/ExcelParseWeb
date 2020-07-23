/* tslint:disable */
import { ImportError } from './import-error';
export interface Import {
  createDT?: string;
  id?: number;
  fileName?: string;
  totalRows?: number;
  skipRows?: number;
  warnRows?: number;
  personMapID?: number;
  updateDT?: string;
  createBy?: number;
  updateBy?: number;
  deleted?: boolean;
  importErrors?: Array<ImportError>;
}
