/* tslint:disable */
import { Company } from './company';
export interface ReturnResponseCompany {
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  result?: Company;
  success?: boolean;
}
