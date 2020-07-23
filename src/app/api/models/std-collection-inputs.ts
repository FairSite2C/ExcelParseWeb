/* tslint:disable */
import { SortParameter } from './sort-parameter';
import { SearchParameter } from './search-parameter';
export interface StdCollectionInputs {
  offset?: number;
  limit?: number;
  includeDeleted?: boolean;
  sortParameters?: Array<SortParameter>;
  searchParameters?: Array<SearchParameter>;
}
