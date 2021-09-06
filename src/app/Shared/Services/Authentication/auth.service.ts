import { User } from './../../Models/user';
import { Injectable } from '@angular/core';

import { HttpService } from './../HttpService/http.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastService } from '../Toast/toast.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;

  constructor(
    private http: HttpService,
    private storage: Storage,
    private router: Router,
    private toast: ToastService
  ) {}

  login(email, otp) {
    return new Promise((resolve, reject) => {
      const body = {
        email,
        otp,
      };
      this.http.post('customer/login', body).subscribe((res: any) => {
        this.toast.simpletoast('OTP Has Been Sent On Your Mail');
        console.log(res);
        if (res){
          const user: User = res.response;
          this.storage.set('user', user);
          resolve(res.response);
        } else {
          reject();
        }
        // resolve(this.user)
      });
    });
  }

  setUser(user) {
    return new Promise((resolve) => {
      const User: User = {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      };
      this.storage.set('user', user).then(() => {
        this.user = user;
        resolve(User);
      });
    });
  }

  authenticate() {
    this.storage.get('user').then((user: User) => {
      this.user = user;
      if (user) {
        if (user.mobile) { this.router.navigateByUrl('home'); }
        else {
          const id: string = user._id;
          this.router.navigateByUrl('profile-management?id=' + id);
        }
      } else {
        this.router.navigateByUrl('login');
      }
    });
  }

  logout(){
    return new Observable<any>((observer) => {
      this.storage.clear();
      this.router.navigateByUrl('login');
      observer.next('logout');
    });
  }
  get getUser() {
    return new Promise((res, rej) => {
      this.storage.get('user').then((user: User) => {
        res(user);
      });
    });
  }
}
