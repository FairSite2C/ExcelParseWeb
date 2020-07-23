/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Persons } from '../models/persons';
import { StdCollectionInputs } from '../models/std-collection-inputs';
import { ReturnResponsePerson } from '../models/return-response-person';
import { Person } from '../models/person';
import { PersonMaps } from '../models/person-maps';
import { StdCollectionInputsId } from '../models/std-collection-inputs-id';
import { ReturnResponsePersonMap } from '../models/return-response-person-map';
import { PersonMapAdd } from '../models/person-map-add';
import { PersonMapMod } from '../models/person-map-mod';
@Injectable({
  providedIn: 'root',
})
class PersonService extends __BaseService {
  static readonly GetAllPath = '/person/all';
  static readonly GetPersonPath = '/person';
  static readonly UpdatePersonPath = '/person/mod';
  static readonly GetAllMapsPath = '/person/map/all';
  static readonly GetMapPath = '/person/map';
  static readonly AddMapPath = '/person/map/add';
  static readonly UpdateMapPath = '/person/map/mod';

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
  GetAllResponse(sci?: StdCollectionInputs): __Observable<__StrictHttpResponse<Persons>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = sci;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/person/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Persons>;
      })
    );
  }
  /**
   * @param sci undefined
   * @return Success
   */
  GetAll(sci?: StdCollectionInputs): __Observable<Persons> {
    return this.GetAllResponse(sci).pipe(
      __map(_r => _r.body as Persons)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  GetPersonResponse(id?: number): __Observable<__StrictHttpResponse<ReturnResponsePerson>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/person`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponsePerson>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetPerson(id?: number): __Observable<ReturnResponsePerson> {
    return this.GetPersonResponse(id).pipe(
      __map(_r => _r.body as ReturnResponsePerson)
    );
  }

  /**
   * @param inVal undefined
   * @return Success
   */
  UpdatePersonResponse(inVal?: Person): __Observable<__StrictHttpResponse<ReturnResponsePerson>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = inVal;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/person/mod`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponsePerson>;
      })
    );
  }
  /**
   * @param inVal undefined
   * @return Success
   */
  UpdatePerson(inVal?: Person): __Observable<ReturnResponsePerson> {
    return this.UpdatePersonResponse(inVal).pipe(
      __map(_r => _r.body as ReturnResponsePerson)
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
      this.rootUrl + `/person/map/all`,
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

  /**
   * @param id undefined
   * @return Success
   */
  GetMapResponse(id?: number): __Observable<__StrictHttpResponse<ReturnResponsePersonMap>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/person/map`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponsePersonMap>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  GetMap(id?: number): __Observable<ReturnResponsePersonMap> {
    return this.GetMapResponse(id).pipe(
      __map(_r => _r.body as ReturnResponsePersonMap)
    );
  }

  /**
   * @param map undefined
   * @return Success
   */
  AddMapResponse(map?: PersonMapAdd): __Observable<__StrictHttpResponse<ReturnResponsePersonMap>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = map;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/person/map/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponsePersonMap>;
      })
    );
  }
  /**
   * @param map undefined
   * @return Success
   */
  AddMap(map?: PersonMapAdd): __Observable<ReturnResponsePersonMap> {
    return this.AddMapResponse(map).pipe(
      __map(_r => _r.body as ReturnResponsePersonMap)
    );
  }

  /**
   * @param map undefined
   * @return Success
   */
  UpdateMapResponse(map?: PersonMapMod): __Observable<__StrictHttpResponse<ReturnResponsePersonMap>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = map;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/person/map/mod`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReturnResponsePersonMap>;
      })
    );
  }
  /**
   * @param map undefined
   * @return Success
   */
  UpdateMap(map?: PersonMapMod): __Observable<ReturnResponsePersonMap> {
    return this.UpdateMapResponse(map).pipe(
      __map(_r => _r.body as ReturnResponsePersonMap)
    );
  }
}

module PersonService {
}

export { PersonService }
