import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { InputComponent } from 'src/app/pages/login/components/input/input.component';
import { DatePickerComponent } from '../input-components/date-picker/date-picker.component';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDetailsComponent,

        InputComponent,
        DatePickerComponent,
      ],
      imports: [
        IonicStorageModule.forRoot(),
        RouterTestingModule,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        HttpClient, HttpHandler,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
