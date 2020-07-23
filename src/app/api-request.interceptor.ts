import { HttpInterceptor, HttpRequest, HttpUserEvent, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


export class RequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 

//return next.handle(req.clone());

let headers = new HttpHeaders({
  'Authorization': 'PapaBearer ',
  'Heritage': 'yomama'
});
      const cloneReq = req.clone({ headers });
      return next.handle(cloneReq);

  }
}
