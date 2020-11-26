import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '../HttpService/http.service';
import { ToastService } from '../Toast/toast.service';
import { Storage } from "@ionic/storage";
import { AuthService } from './auth.service';

describe('AuthService', () => {
  // var service: AuthService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[
        HttpClient,
        Storage
      ]
    });
  });
  
  it('should be created', () => {
    let service = AuthService;
    expect(service).toBeTruthy();
  });
});
