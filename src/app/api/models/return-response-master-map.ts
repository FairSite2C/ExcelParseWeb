/* tslint:disable */
import { MasterMap } from './master-map';
export interface ReturnResponseMasterMap {
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  result?: MasterMap;
  success?: boolean;
}
