/* tslint:disable */
import { PersonMap } from './person-map';
export interface ReturnResponsePersonMap {
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  result?: PersonMap;
  success?: boolean;
}
