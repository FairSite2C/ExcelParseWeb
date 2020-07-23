/* tslint:disable */
export interface MasterMapColumn {
  id?: number;
  masterMapID?: number;
  columnName?: string;
  columnDataType?: number;
  required?: boolean;
  makeIndex?: boolean;
  header?: string;
  createDT?: string;
  updateDT?: string;
  createBy?: number;
  updateBy?: number;
  deleted?: boolean;
}
