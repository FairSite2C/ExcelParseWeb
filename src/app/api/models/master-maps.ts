/* tslint:disable */
import { MasterMap } from './master-map';
import { Link } from './link';
export interface MasterMaps {
  success?: boolean;
  feedback?: string;
  errors?: Array<string>;
  info?: {[key: string]: string};
  items?: Array<MasterMap>;
  totalCount?: number;
  itemCount?: number;
  paging?: Link;
}
