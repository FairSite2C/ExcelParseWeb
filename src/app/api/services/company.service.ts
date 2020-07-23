/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Companies } from '../models/companies';
import { StdCollectionInputs } from '../models/std-collection-inputs';
import { ReturnResponseCompany } from '../models/return-response-company';
import { CompanyAdd } from '../models/company-add';
import { CompanyMod } from '../models/company-mod';
import { PersonMaps } from '../models/person-maps';
import { StdCollectionInputsId } from '../models/std-collection-inputs-id';
@Injectable({
  providedIn: 'root',
})
class CompanyService extends __BaseService {
  static readonly GetAllPath = '/company/all';
  static readonly GetCompanyPath = '/company';
  static readonly AddCompanyPath = '/company/add';
  static readonly UpdateCompanyPath = '/company/mod';
  static readonly GetAllMapsPath = '/company/map/all';

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
  GetAllResponse(sci?: StdCollectionInputs): __Observable<__StrictHttpResponse<Companies>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/company/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Companies>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAll(sci?: StdCollectionInputs): __Observable<Companies> {
    return this.GetAllResponse(sci).pipe(
      __map(_r => _r.body as Companies)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetCompanyResponse(id?: number): __Observable<__StrictHttpResponse<ReturnResponseCompany>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/company`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponseCompany>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetCompany(id?: number): __Observable<ReturnResponseCompany> {
    return this.GetCompanyResponse(id).pipe(
      __map(_r => _r.body as ReturnResponseCompany)
    );
  }

  /**
   * @param inVal undefined
   * @return Success
   */
  AddCompanyResponse(inVal?: CompanyAdd): __Observable<__StrictHttpResponse<ReturnResponseCompany>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = inVal;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/company/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponseCompany>;
      })
    );
  }
  /**
   * @param inVal undefined
   * @return Success
   */
  AddCompany(inVal?: CompanyAdd): __Observable<ReturnResponseCompany> {
    return this.AddCompanyResponse(inVal).pipe(
      __map(_r => _r.body as ReturnResponseCompany)
    );
  }

  /**
   * @param inVal undefined
   * @return Success
   */
  UpdateCompanyResponse(inVal?: CompanyMod): __Observable<__StrictHttpResponse<ReturnResponseCompany>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = inVal;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/company/mod`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponseCompany>;
      })
    );
  }
  /**
   * @param inVal undefined
   * @return Success
   */
  UpdateCompany(inVal?: CompanyMod): __Observable<ReturnResponseCompany> {
    return this.UpdateCompanyResponse(inVal).pipe(
      __map(_r => _r.body as ReturnResponseCompany)
    );
  }

  /**
   * @param sci undefined
   * @return Success
   */
  GetAllMapsResponse(sci?: StdCollectionInputsId): __Observable<__StrictHttpResponse<PersonMaps>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/company/map/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PersonMaps>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAllMaps(sci?: StdCollectionInputsId): __Observable<PersonMaps> {
    return this.GetAllMapsResponse(sci).pipe(
      __map(_r => _r.body as PersonMaps)
    );
  }
}

module CompanyService {
}

export { CompanyService }
