import { STORAGE_KEY } from '../../core/constants/index';
import { SigninUserResponse } from './../shared/models/response/index';
import { BaseResponse } from './../../core/base/index';
import { SigninUserRequest } from './../shared/models/request/index';
import { LocalStorageService } from './../../core/storages/local_storage/index';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [routerTransition()]
})
export class SigninComponent implements OnInit {
    private signinRequest: SigninUserRequest;    

    constructor(public router: Router,
        private authService: AuthService,
        private localStorageService: LocalStorageService) {}

    ngOnInit() {
        this.signinRequest = new SigninUserRequest();
    }

    private signinUser() {
        this.authService.signinUser(this.signinRequest).subscribe(
            (res: BaseResponse<SigninUserResponse>) => {
                if (res.success){
                    this.localStorageService.writeObject(STORAGE_KEY.TOKEN_STORAGE_KEY, res.data);
                    this.router.navigate(['/']);
                }
            },
            (err) => {

            },
            () => {

            });
    }

}
