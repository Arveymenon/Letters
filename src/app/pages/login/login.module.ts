import { InputComponent } from './components/input/input.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http';
import { EmailStringValidatorDirective } from 'src/app/Shared/Directives/EmailStringValidator/email-string-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClientModule
  ],
  declarations: [
    LoginPage,
    InputComponent,
    EmailStringValidatorDirective
  ]
})
export class LoginPageModule {}
