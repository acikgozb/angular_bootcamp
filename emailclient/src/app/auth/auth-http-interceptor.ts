import {tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType
} from "@angular/common/http";
import {Observable} from "rxjs";


//! we do not write {providedIn: "root"} for interceptors.
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  //! next argument is there to forward the request to the next interceptor if there is any.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      withCredentials: true
    });

    //! in order to check which events come out from our interceptor, use HttpEventType in pipe.
    return next.handle(modifiedRequest);
  }
}
