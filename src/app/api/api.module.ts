/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { CompanyService } from './services/company.service';
import { ImportService } from './services/import.service';
import { MasterMapService } from './services/master-map.service';
import { PersonService } from './services/person.service';
import { SaleService } from './services/sale.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    CompanyService,
    ImportService,
    MasterMapService,
    PersonService,
    SaleService
  ],
})
export class ApiModule { }
