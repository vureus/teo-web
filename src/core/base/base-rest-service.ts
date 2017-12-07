import { SigninResponse } from './signin.response';
import { LocalStorageService } from './../../core/storages/index';
import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from '../../app/app.setting';
import { HEADER_KEY, STORAGE_KEY } from '../../core/constants/index';
import { BooleanHelper } from '../../core/helper/index';
import { RESTClient,  BaseUrl, DefaultHeaders } from './../../core/rest/angular-2-rest';

@Injectable()
@BaseUrl(AppSetting.BASE_URL)
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class BaseRESTService extends RESTClient {

    public get userToken(): SigninResponse {
      const userInfo = this.localStorageService.readObject<SigninResponse>(STORAGE_KEY.TOKEN_STORAGE_KEY);
      return !BooleanHelper.isNullOrUndefined(userInfo) ? userInfo : null;
    }

    public get isAuth(): boolean {
      const userInfo = this.localStorageService.readObject<SigninResponse>(STORAGE_KEY.TOKEN_STORAGE_KEY);
      return !BooleanHelper.isNullOrUndefined(userInfo);
    }

    constructor(
        public http: Http,
        public localStorageService: LocalStorageService) {
        super(http);
    }

    public requestInterceptor(req: Request) {
      const userInfo = this.localStorageService.readObject<SigninResponse>(STORAGE_KEY.TOKEN_STORAGE_KEY);
      if (!BooleanHelper.isNullOrUndefined(userInfo)) {
        req.headers.append(HEADER_KEY.AUTH, userInfo.key);
      }
    }

    public responseInterceptor(res: Observable<any>): Observable<any> {
      return res.map(r => r.json());
    }
}
