/* tslint:disable */
import { Sale } from './sale';
export interface ReturnResponseSale {
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  result?: Sale;
  success?: boolean;
}
