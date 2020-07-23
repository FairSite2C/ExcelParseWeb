/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Imports } from '../models/imports';
import { StdCollectionInputsId } from '../models/std-collection-inputs-id';
import { ReturnResponseImport } from '../models/return-response-import';
import { ImportPost } from '../models/import-post';
@Injectable({
  providedIn: 'root',
})
class ImportService extends __BaseService {
  static readonly GetAllByMasterMapPath = '/imports/masterMap';
  static readonly GetAllByPersonMapPath = '/imports/personMap';
  static readonly GetAllByPersonPath = '/imports/person';
  static readonly GetAllByCompanyPath = '/imports/company';
  static readonly GetImportPath = '/import';
  static readonly GetSheetHeadersPath = '/import/getSheetHeaders';
  static readonly UploadXlPath = '/import/upload/xl';

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
  GetAllByMasterMapResponse(sci?: StdCollectionInputsId): __Observable<__StrictHttpResponse<Imports>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/imports/masterMap`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Imports>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAllByMasterMap(sci?: StdCollectionInputsId): __Observable<Imports> {
    return this.GetAllByMasterMapResponse(sci).pipe(
      __map(_r => _r.body as Imports)
    );
  }

  /**
   * @param sci undefined
   * @return Success
   */
  GetAllByPersonMapResponse(sci?: StdCollectionInputsId): __Observable<__StrictHttpResponse<Imports>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/imports/personMap`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Imports>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAllByPersonMap(sci?: StdCollectionInputsId): __Observable<Imports> {
    return this.GetAllByPersonMapResponse(sci).pipe(
      __map(_r => _r.body as Imports)
    );
  }

  /**
   * @param sci undefined
   * @return Success
   */
  GetAllByPersonResponse(sci?: StdCollectionInputsId): __Observable<__StrictHttpResponse<Imports>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/imports/person`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Imports>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAllByPerson(sci?: StdCollectionInputsId): __Observable<Imports> {
    return this.GetAllByPersonResponse(sci).pipe(
      __map(_r => _r.body as Imports)
    );
  }

  /**
   * @param sci undefined
   * @return Success
   */
  GetAllByCompanyResponse(sci?: StdCollectionInputsId): __Observable<__StrictHttpResponse<Imports>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/imports/company`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Imports>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAllByCompany(sci?: StdCollectionInputsId): __Observable<Imports> {
    return this.GetAllByCompanyResponse(sci).pipe(
      __map(_r => _r.body as Imports)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetImportResponse(id?: number): __Observable<__StrictHttpResponse<ReturnResponseImport>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/import`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponseImport>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetImport(id?: number): __Observable<ReturnResponseImport> {
    return this.GetImportResponse(id).pipe(
      __map(_r => _r.body as ReturnResponseImport)
    );
  }

  /**
   * @return Success
   */
  GetSheetHeadersResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/import/getSheetHeaders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @return Success
   */
  GetSheetHeaders(): __Observable<Array<string>> {
    return this.GetSheetHeadersResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @return Success
   */
  UploadXlResponse(): __Observable<__StrictHttpResponse<Array<ImportPost>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/import/upload/xl`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ImportPost>>;
      })
    );
  }
  /**
   * @return Success
   */
  UploadXl(): __Observable<Array<ImportPost>> {
    return this.UploadXlResponse().pipe(
      __map(_r => _r.body as Array<ImportPost>)
    );
  }
}

module ImportService {
}

export { ImportService }
