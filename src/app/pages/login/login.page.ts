import { FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../../Shared/Services/Authentication/auth.service";
import { Router } from "@angular/router";
import { HttpService } from "src/app/Shared/Services/HttpService/http.service";
import { User } from "src/app/Shared/Models/user";
import { LoadingService } from 'src/app/Shared/Services/Loader/loading.service';
import { ToastService } from 'src/app/Shared/Services/Toast/toast.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginStage = 1;
  email = new FormControl('',Validators.required);

  protected user: User;
  protected otp = new FormControl();
  protected randomOtp: Number;
  constructor(
    private auth: AuthService,
    private router: Router,
    private http: HttpService,
    private loader: LoadingService,
    private toast: ToastService
  ) {}

  ngOnInit() {}

  login() {
    if (this.loginStage == 1) {
      this.randomOtp = Math.round(Math.random() * 1000);
      console.log(this.randomOtp);
      this.authenticate()
    } else {
      if (this.otp.value == this.randomOtp) {
        this.auth.authenticate();
      } else {
        this.toast.simpletoast('Invalid OTP')
      }
    }
  }

  authenticate(){
    this.loader.create();
    this.auth.login(this.email.value, this.randomOtp).then((user: User) => {
      this.loader.dismiss();
      this.user = user;
      this.loginStage = 2;
    });
  }

  resendOtp(){
    this.randomOtp = Math.round(Math.random() * 1000);
    this.authenticate()
  }
}
