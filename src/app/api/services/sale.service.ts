/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Sales } from '../models/sales';
import { StdCollectionInputs } from '../models/std-collection-inputs';
import { StdCollectionInputsId } from '../models/std-collection-inputs-id';
import { ReturnResponseSale } from '../models/return-response-sale';
@Injectable({
  providedIn: 'root',
})
class SaleService extends __BaseService {
  static readonly GetAllPath = '/sale/all';
  static readonly GetAllPersonPath = '/sale/person/all';
  static readonly GetAllCompanyPath = '/sale/company/all';
  static readonly GetSalePath = '/sale';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param sci undefined
   * @return Success
   */
  GetAllResponse(sci?: StdCollectionInputs): __Observable<__StrictHttpResponse<Sales>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/sale/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Sales>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAll(sci?: StdCollectionInputs): __Observable<Sales> {
    return this.GetAllResponse(sci).pipe(
      __map(_r => _r.body as Sales)
    );
  }

  /**
   * @param sci undefined
   * @return Success
   */
  GetAllPersonResponse(sci?: StdCollectionInputsId): __Observable<__StrictHttpResponse<Sales>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/sale/person/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Sales>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAllPerson(sci?: StdCollectionInputsId): __Observable<Sales> {
    return this.GetAllPersonResponse(sci).pipe(
      __map(_r => _r.body as Sales)
    );
  }

  /**
   * @param sci undefined
   * @return Success
   */
  GetAllCompanyResponse(sci?: StdCollectionInputsId): __Observable<__StrictHttpResponse<Sales>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/sale/company/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Sales>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAllCompany(sci?: StdCollectionInputsId): __Observable<Sales> {
    return this.GetAllCompanyResponse(sci).pipe(
      __map(_r => _r.body as Sales)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetSaleResponse(id?: number): __Observable<__StrictHttpResponse<ReturnResponseSale>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/sale`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponseSale>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetSale(id?: number): __Observable<ReturnResponseSale> {
    return this.GetSaleResponse(id).pipe(
      __map(_r => _r.body as ReturnResponseSale)
    );
  }
}

module SaleService {
}

export { SaleService }
