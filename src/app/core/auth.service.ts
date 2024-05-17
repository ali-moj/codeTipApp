import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {AppUserRequest} from '../model/app-user-request';
import {Observable} from 'rxjs';
import {AppUser} from '../model/AppUser';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {GenericResponse} from '../model/GenericResponse';
import {OperationResult} from '../model/OperationResult';
import {ApiUrlList} from '../setting/ApiUrlList';
import {FileRequest} from '../model/file-request';
import {LoginRequest} from '../model/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient,
              private cookieService: CookieService) {
  }

  login(request: LoginRequest): Observable<GenericResponse<AppUser>> {
    const url = ApiUrlList.auth;
    return this._http.post<GenericResponse<AppUser>>(url, request)
      .pipe(map(res => {
        if(res.operationResult === OperationResult.Success){
          const currentDate = new Date();
          currentDate.setTime(currentDate.getTime() + 30 * 60 * 1000);
          //console.log(res.result);
          this.cookieService.set('user', JSON.stringify(res.result), currentDate);
        }
        return res;
      }));

  }

  register(request: AppUserRequest): Observable<GenericResponse<AppUser>> {
    const url = ApiUrlList.register;
    return this._http.post<GenericResponse<AppUser>>(url, request);

  }

  testUpload(request:FileRequest) :Observable<HttpEvent<any>>{
    const url = ApiUrlList.testUpload;
    const req = new HttpRequest('POST', url, request, {
      reportProgress: true,
    });
    return this._http.request(req);
  }

  userInfo(): AppUser {
    const user = this.cookieService.get('user');
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

}
