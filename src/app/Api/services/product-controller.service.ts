/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BaseResponse } from '../models/base-response';

/**
 * Product Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductControllerService extends __BaseService {
  static readonly searchProductUsingGETPath = '/product/{searchBy}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * searchProduct
   * @param searchBy searchBy
   * @return OK
   */
  searchProductUsingGETResponse(searchBy: string): __Observable<__StrictHttpResponse<BaseResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/product/${encodeURIComponent(searchBy)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BaseResponse>;
      })
    );
  }
  /**
   * searchProduct
   * @param searchBy searchBy
   * @return OK
   */
  searchProductUsingGET(searchBy: string): __Observable<BaseResponse> {
    return this.searchProductUsingGETResponse(searchBy).pipe(
      __map(_r => _r.body as BaseResponse)
    );
  }
}

module ProductControllerService {
}

export { ProductControllerService }
