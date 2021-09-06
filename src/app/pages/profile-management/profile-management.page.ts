import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { User } from 'src/app/Shared/Models/user';
import { AuthService } from 'src/app/Shared/Services/Authentication/auth.service';
import { HttpService } from 'src/app/Shared/Services/HttpService/http.service';
import { ToastService } from 'src/app/Shared/Services/Toast/toast.service';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.page.html',
  styleUrls: ['./profile-management.page.scss']
})
export class ProfileManagementPage implements OnInit, OnDestroy {
  public UserDetails: {
    handle: string;
    name: string;
    mobile: string;
    dob: string;
    valid: boolean
  };
  
  public ProfileDetails: {
    interests: Array<string>;
    description: string;
    displayPicture: boolean;
    showDescription: boolean;
    dob: boolean;
    showInterests: boolean;
  };
  public userLoggedIn: boolean = false;
  
  private userId: string
  
  constructor(
    protected authService: AuthService,
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private toast: ToastService
  ) {
    this.platform.backButton.subscribe((res) => {
      console.log(res);
    });
    this.platform.backButton.isStopped = true;
  }

  ngOnInit() {
    console.log('profile-management');
    if (this.router.url == '/home/profile'){
      this.userLoggedIn = true;
    }
  }

  ngOnDestroy(){
    console.log('Destroyed');
  }

  logout(){
    this.authService.logout().subscribe(status => {
      console.log(status);
    });
  }

  setUserDetails(details) {
    this.UserDetails = details;
  }
  setProfileDetails(details) {
    this.ProfileDetails = details;
  }

  updateProfile() {
    if (!this.UserDetails.handle){
      this.toast.simpletoast('Kindly Provide A User Handle');
      return;
    }
    if (!this.UserDetails.mobile){
      this.toast.simpletoast('Kindly Provide A Mobile Number');
      return;
    }
    if (this.ProfileDetails.interests.length == 0){
      this.toast.simpletoast('Kindly Select Atleast One Interest');
      return;
    }
    if (!this.UserDetails.valid){
      this.toast.simpletoast('Kindly Provide Valid Mobile Number And Handle');
      return;
    }

    console.log(this.UserDetails);
    console.log(this.ProfileDetails);
    const reqBody = {
      id: this.userId,
      mobile: this.UserDetails.mobile,
      email: null,
      name: this.UserDetails.name,
      handle: this.UserDetails.handle,
      description: this.ProfileDetails.description,
      dob: this.ProfileDetails.dob,
      interests: this.ProfileDetails.interests,
      showDisplayPicture: this.ProfileDetails.displayPicture,
      showDescription: this.ProfileDetails.showDescription,
      showAge: this.ProfileDetails.dob,
      showInterests: this.ProfileDetails.showInterests,
    };
    console.log(reqBody);
    // this.httpService.post("customer/update", reqBody).subscribe((res: any)=> {
    //   if(res.error == false){
    this.authService.setUser(reqBody);
    this.router.navigateByUrl('home');
    //   }
    // });
  }
}
