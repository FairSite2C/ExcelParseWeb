/* tslint:disable */
import { PersonMap } from './person-map';
import { Link } from './link';
export interface PersonMaps {
  success?: boolean;
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  items?: Array<PersonMap>;
  totalCount?: number;
  itemCount?: number;
  paging?: Link;
}
