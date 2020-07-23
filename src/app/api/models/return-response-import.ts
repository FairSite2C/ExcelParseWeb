/* tslint:disable */
import { Import } from './import';
export interface ReturnResponseImport {
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  result?: Import;
  success?: boolean;
}
