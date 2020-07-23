/* tslint:disable */
import { Sale } from './sale';
import { Link } from './link';
export interface Sales {
  success?: boolean;
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  items?: Array<Sale>;
  totalCount?: number;
  itemCount?: number;
  paging?: Link;
}
