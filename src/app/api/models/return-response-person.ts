/* tslint:disable */
import { Person } from './person';
export interface ReturnResponsePerson {
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  result?: Person;
  success?: boolean;
}
