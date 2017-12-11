import { LocalStorageService } from './../../../core/storages/index';
import { DefaultResponse, BaseResponse, BaseRESTService } from './../../../core/base/index';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GET, PUT, POST, DELETE, Path, Body, Query } from './../../../core/rest/angular-2-rest';
import { SignupUserResponse, SigninUserResponse } from '../models/response/index';

@Injectable()
export class AuthService extends BaseRESTService {
  constructor(public http: Http,
    public localStorageService: LocalStorageService) {
    super(http, localStorageService);
  }

  @POST('signin')
  public signinUser(@Body SigninUserRequest): Observable<BaseResponse<SigninUserResponse>> {
    return null;
  };

  @POST('signup')
  public signupUser(@Body SignupUserRequest): Observable<BaseResponse<SignupUserResponse>> {
    return null;
  };

}
