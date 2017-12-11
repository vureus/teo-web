import { LocalStorageService } from './../../core/storages/local_storage/local-storage.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './../shared/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup.routing';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent],
  providers: [AuthService, LocalStorageService]
})
export class SignupModule { }
