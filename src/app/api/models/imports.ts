/* tslint:disable */
import { Import } from './import';
import { Link } from './link';
export interface Imports {
  success?: boolean;
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  items?: Array<Import>;
  totalCount?: number;
  itemCount?: number;
  paging?: Link;
}
