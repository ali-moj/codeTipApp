import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';


@Injectable()
export class JwtService implements HttpInterceptor {

  constructor(private _cookie: CookieService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let user = null;
    if (this._cookie.check('user')) {
      user = JSON.parse(this._cookie.get('user'));

    }

    if (user) {
      //console.log(user.token);
      request = request.clone({
        setHeaders: {
          Authorization: `CodeTip ${user.token}`,
          'Content-Type': 'application/json'
        }
      });

    } else {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request);
  }
}
