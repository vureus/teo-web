import { STORAGE_KEY } from '../../../core/constants/index';
import { SigninResponse } from './../../../core/base/signin.response';
import { LocalStorageService } from './../../../core/storages/local_storage/index';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { BooleanHelper } from '../../../core/index';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private localStorageService: LocalStorageService) { }

    canActivate() {

        const userInfo = this.localStorageService.readObject<SigninResponse>(STORAGE_KEY.TOKEN_STORAGE_KEY);
        
        if (!BooleanHelper.isNullOrUndefined(userInfo)){
            return true;
        }

        this.router.navigate(['/signin']);
        return false;
    }
}
