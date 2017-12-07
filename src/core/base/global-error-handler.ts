//import { STORAGE_KEY } from 'core/constants/index';
//import { LocalStorageService } from './../storages/local_storage/local-storage.service';
import { Router } from '@angular/router';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor() {
    }

    handleError(error: any): void {
        if (error.status === 401) {
           //var localStorageService = new LocalStorageService();
            //localStorageService.remove(STORAGE_KEY.TOKEN_STORAGE_KEY);
        } else {
            try {
                var applicationError = error.headers.get('Application-Error');
                var serverError = error.json();
                var modelStateErrors: string = '';

                if (!serverError.type) {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '\n';
                        }
                    }
                }

                modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
            } catch (ex) {
                console.log(ex);
            }
            //return Observable.throw(applicationError || modelStateErrors || 'Server error');
        }
    }
}
