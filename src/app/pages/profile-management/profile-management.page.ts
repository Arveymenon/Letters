import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { AuthService } from 'src/app/Shared/Services/Authentication/auth.service';
import { HttpService } from "src/app/Shared/Services/HttpService/http.service";
import { ToastService } from 'src/app/Shared/Services/Toast/toast.service';

@Component({
  selector: "app-profile-management",
  templateUrl: "./profile-management.page.html",
  styleUrls: ["./profile-management.page.scss"]
})
export class ProfileManagementPage implements OnInit, OnDestroy {
  protected UserDetails: {
    handle: string;
    name: string;
    mobile: string;
    dob: Number;
    valid: boolean
  };
  
  protected ProfileDetails: {
    interests: Array<string>;
    description: string;
    displayPicture: Boolean;
    showDescription: Boolean;
    dob: Boolean;
    showInterests: Boolean;
  };
  
  private userId: string
  constructor(
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private authService: AuthService,
    private toast: ToastService
  ) {
    this.platform.backButton.subscribe((res) => {
      console.log(res);
    });
    this.platform.backButton.isStopped = true;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((values) => {
      console.log(values.id);
      if(values.id){
        this.userId = values.id
        
        // values.id -> ID passed in params who details shall be shown on the front end
        // this.authService.getUser -> Current User

        if(values.id == this.authService.getUser._id){
          this.httpService.get('customer/get/'+values.id).subscribe((res: any)=>{
            if(res.error == false){
              this.setValues(res.response)
            }
          })
        } else {
          this.setValues(this.authService.getUser)
        }
      }
      else
        this.authService.authenticate()
    });
  }

  ngOnDestroy(){
    console.log('Destroyed')
  }

  setValues(user){
    console.log(user)
    this.UserDetails.name = user.name
  }

  setUserDetails(details) {
    this.UserDetails = details;
  }
  setProfileDetails(details) {
    this.ProfileDetails = details;
  }

  updateProfile() {
    if(!this.UserDetails.handle){
      this.toast.simpletoast('Kindly Provide A User Handle')
      return
    }
    if(!this.UserDetails.mobile){
      this.toast.simpletoast('Kindly Provide A Mobile Number')
      return
    }
    if(this.ProfileDetails.interests.length == 0){
      this.toast.simpletoast('Kindly Select Atleast One Interest')
      return
    }
    if(!this.UserDetails.valid){
      this.toast.simpletoast('Kindly Provide Valid Mobile Number And Handle')
      return
    }

    console.log(this.UserDetails);
    console.log(this.ProfileDetails);
    let reqBody = {
      id: this.userId,
      mobile: this.UserDetails.mobile,
      email: null,
      name: this.UserDetails.name,
      handle: this.UserDetails.handle,
      description: this.ProfileDetails.description,
      dob: this.ProfileDetails.dob,
      interests: this.ProfileDetails.interests,
      show_display_picture: this.ProfileDetails.displayPicture,
      show_description: this.ProfileDetails.showDescription,
      show_age: this.ProfileDetails.dob,
      show_interests: this.ProfileDetails.showInterests,
    };
    console.log(reqBody)
    this.httpService.post("customer/update", reqBody).subscribe((res: any)=> {
      if(res.error == false){
        this.authService.setUser(res.response)
        this.router.navigateByUrl('home')
      }
    });
  }
}
