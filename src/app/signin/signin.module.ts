import { LocalStorageService } from './../../core/storages/local_storage/index';
import { AuthService } from './../shared/services/auth.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin.routing';
import { SigninComponent } from './signin.component';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        SigninRoutingModule
    ],
    declarations: [
        SigninComponent
    ],
    providers: [AuthService, LocalStorageService]
})
export class SigninModule {}
