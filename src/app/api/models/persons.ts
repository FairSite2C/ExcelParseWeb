/* tslint:disable */
import { Person } from './person';
import { Link } from './link';
export interface Persons {
  success?: boolean;
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  items?: Array<Person>;
  totalCount?: number;
  itemCount?: number;
  paging?: Link;
}
