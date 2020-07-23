/* tslint:disable */
import { PersonMapColumnAdd } from './person-map-column-add';
export interface PersonMapAdd {
  name: string;
  personId: number;
  masterMapId: number;
  columns?: Array<PersonMapColumnAdd>;
}
