import { FormControl, Validators } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "./../../Shared/Services/Authentication/auth.service";
import { Router } from "@angular/router";
import { User } from "src/app/Shared/Models/user";
import { LoadingService } from 'src/app/Shared/Services/Loader/loading.service';
import { ToastService } from 'src/app/Shared/Services/Toast/toast.service';
import { HttpClient } from '@angular/common/http';
import * as Vara from 'vara'

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  // ViewChild(textBox): any;
  public loginStage = 1;
  protected user: User;
  protected randomOtp: Number;
  
  public email = new FormControl('',Validators.required);
  public otp = new FormControl();
  constructor(
    private auth: AuthService,
    private router: Router,
    private loader: LoadingService,
    private toast: ToastService
  ) {}

  ngOnInit() {
    console.log('login')
    let vara = new Vara("#text_box",`https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json`,[{
      text:"Lafazo", // String, text to be shown
      fontSize: 40, // Number, size of the text
      strokeWidth: 2.5, // Width / Thickness of the stroke
      color: "#fff700", // Color of the text
      id:"", // String or integer, for if animations are called manually or when using the get() method. Default is the index of the object.
      duration:2000, // Number, Duration of the animation in milliseconds
      textAlign:"left", // String, text align, accepted values are left,center,right
      x:10, // Number, x coordinate of the text
      y:10, // Number, y coordinate of the text
      fromCurrentPosition:{ // Whether the x or y coordinate should be from its calculated position, ie the position if x or y coordinates were not applied
        x:true,
        y:true,
      },
      autoAnimation:true,
      queued:true,
      delay:0,
      letterSpacing:0
    }],{
      // The options given below will be applicable to every text created,
      // however they will not override the options set above.
      // They will work as secondary options.
      fontSize: 15, // Number, size of the text
      strokeWidth:.5, // Width / Thickness of the stroke
      color:"black", // Color of the text
      duration:2000, // Number, Duration of the animation in milliseconds
      textAlign:"left", // String, text align, accepted values are left,center,right
      autoAnimation:true, // Boolean, Whether to animate the text automatically
      queued:true, // Boolean, Whether the animation should be in a queue
      letterSpacing:0
    })
  }

  login() {
  //   if (this.loginStage == 1) {
  //     this.randomOtp = Math.round(Math.random() * 1000);
  //     console.log(this.randomOtp);
  //     // should only send OTP
  //     if(this.email.valid){
  //       this.authenticate()
  //     }else{
  //       this.toast.simpletoast('Kindly Provide A Valid Email ID')
  //     }
  //   } else {
  //     if (this.otp.value == this.randomOtp) {
  //       this.auth.authenticate();
  //     } else {
  //       this.toast.simpletoast('Invalid OTP')
  //     }
  //   }
  //   return
    this.router.navigateByUrl('profile-management');
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
