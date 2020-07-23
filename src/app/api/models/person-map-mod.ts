/* tslint:disable */
import { PersonMapColumnMod } from './person-map-column-mod';
import { PersonMapColumnAdd } from './person-map-column-add';
export interface PersonMapMod {
  id: number;
  name?: string;
  personId?: number;
  updates?: Array<PersonMapColumnMod>;
  deletes?: Array<number>;
  adds?: Array<PersonMapColumnAdd>;
}
