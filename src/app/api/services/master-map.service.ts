/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MasterMaps } from '../models/master-maps';
import { StdCollectionInputs } from '../models/std-collection-inputs';
import { ReturnResponseMasterMap } from '../models/return-response-master-map';
import { MasterMap } from '../models/master-map';
@Injectable({
  providedIn: 'root',
})
class MasterMapService extends __BaseService {
  static readonly GetAllPath = '/masterMap/all';
  static readonly GetMasterMapPath = '/masterMap';
  static readonly AddMasterMapPath = '/masterMap/add';
  static readonly UpdateMasterMapPath = '/masterMap/mod';
  static readonly CreateDatatablePath = '/masterMap/make';

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
  GetAllResponse(sci?: StdCollectionInputs): __Observable<__StrictHttpResponse<MasterMaps>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/masterMap/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MasterMaps>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAll(sci?: StdCollectionInputs): __Observable<MasterMaps> {
    return this.GetAllResponse(sci).pipe(
      __map(_r => _r.body as MasterMaps)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetMasterMapResponse(id?: number): __Observable<__StrictHttpResponse<ReturnResponseMasterMap>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/masterMap`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponseMasterMap>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetMasterMap(id?: number): __Observable<ReturnResponseMasterMap> {
    return this.GetMasterMapResponse(id).pipe(
      __map(_r => _r.body as ReturnResponseMasterMap)
    );
  }

  /**
   * @param map undefined
   * @return Success
   */
  AddMasterMapResponse(map?: MasterMap): __Observable<__StrictHttpResponse<ReturnResponseMasterMap>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = map;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/masterMap/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponseMasterMap>;
      })
    );
  }
  /**
   * @param map undefined
   * @return Success
   */
  AddMasterMap(map?: MasterMap): __Observable<ReturnResponseMasterMap> {
    return this.AddMasterMapResponse(map).pipe(
      __map(_r => _r.body as ReturnResponseMasterMap)
    );
  }

  /**
   * @param map undefined
   * @return Success
   */
  UpdateMasterMapResponse(map?: MasterMap): __Observable<__StrictHttpResponse<ReturnResponseMasterMap>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = map;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/masterMap/mod`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponseMasterMap>;
      })
    );
  }
  /**
   * @param map undefined
   * @return Success
   */
  UpdateMasterMap(map?: MasterMap): __Observable<ReturnResponseMasterMap> {
    return this.UpdateMasterMapResponse(map).pipe(
      __map(_r => _r.body as ReturnResponseMasterMap)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  CreateDatatableResponse(id?: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/masterMap/make`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  CreateDatatable(id?: number): __Observable<number> {
    return this.CreateDatatableResponse(id).pipe(
      __map(_r => _r.body as number)
    );
  }
}

module MasterMapService {
}

export { MasterMapService }
