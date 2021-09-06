import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '../HttpService/http.service';
import { ToastService } from '../Toast/toast.service';
import { Storage } from '@ionic/storage';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TestScheduler } from 'rxjs/testing';
import { constants } from 'buffer';
import { User } from './../../Models/user';

describe('AuthService', () => {
  let http: HttpService;
  let storage: Storage;
  let router: Router;
  let toast: ToastService;
  const service = new AuthService(http, storage, router, toast);

  const testScheduler = new TestScheduler((actual, expected) => {
    // asserting the two objects are equal
    // e.g. using chai.
    expect(actual).toEqual(expected);
  });

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [AuthService],
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        Storage
      ]
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('click login should login', () => {
    const email = 'email@gmail.com';
    const otp = '234234';
    const value = service.login(email, otp).then((res) => {
      console.log(res);
    });
    expect(value).toBeTruthy();
  });
});
