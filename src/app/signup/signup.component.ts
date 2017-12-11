import { Router } from '@angular/router';
import { STORAGE_KEY } from '../../core/constants/index';
import { LocalStorageService } from '../../core/storages/index';
import { BaseResponse } from './../../core/base/index';
import { SignupUserResponse } from './../shared/models/response/index';
import { AuthService } from './../shared/services/auth.service';
import { SignupUserRequest } from './../shared/models/request/index';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    private signupRequest: SignupUserRequest;

    constructor(public router: Router,
        private authService: AuthService,
        private localStorageService: LocalStorageService) {

    }

    ngOnInit() {
        this.signupRequest = new SignupUserRequest();
    }

    private signupUser() {
        this.authService.signupUser(this.signupRequest).subscribe(
            (res: BaseResponse<SignupUserResponse>) => {
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
