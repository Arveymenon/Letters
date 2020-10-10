import { User } from "./../../Models/user";
import { Injectable } from "@angular/core";

import { HttpService } from "./../HttpService/http.service";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { ToastService } from "../Toast/toast.service";

@Injectable({
  providedIn: "root",
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
      let body = {
        email: email,
        otp: otp,
      };
      this.http.post("customer/login", body).subscribe((res: any) => {
        this.toast.simpletoast("OTP Has Been Sent On Your Mail");
        console.log(res);
        let user: User = res.response;
        this.storage.set("user", user);
        resolve(res.response);
      });
    });
  }


  setUser(user) {
    return new Promise((resolve) => {
      let User: User = {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      };
      this.storage.set("user", User).then(() => {
        resolve(User);
      });
    });
  }

  authenticate() {
    this.storage.get("user").then((user: User) => {
      this.user = user
      if (user) {
        if (user.mobile) this.router.navigateByUrl("home");
        else {
          let id: string = user["_id"];
          this.router.navigateByUrl("profile-management?id=" + id);
        }
      } else {
        this.router.navigateByUrl("login");
      }
    });
  }

  logout(){
    this.storage.clear()
    this.router.navigateByUrl('login')
  }


  get getUser(): User{ return this.user }
}