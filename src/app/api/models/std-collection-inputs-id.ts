/* tslint:disable */
import { SortParameter } from './sort-parameter';
import { SearchParameter } from './search-parameter';
export interface StdCollectionInputsId {
  id: number;
  offset?: number;
  limit?: number;
  includeDeleted?: boolean;
  sortParameters?: Array<SortParameter>;
  searchParameters?: Array<SearchParameter>;
}
