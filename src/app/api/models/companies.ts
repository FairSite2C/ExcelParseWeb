/* tslint:disable */
import { Company } from './company';
import { Link } from './link';
export interface Companies {
  success?: boolean;
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  items?: Array<Company>;
  totalCount?: number;
  itemCount?: number;
  paging?: Link;
}
