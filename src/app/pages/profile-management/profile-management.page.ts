import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.page.html',
  styleUrls: ['./profile-management.page.scss'],
})
export class ProfileManagementPage implements OnInit {
  constructor(private platform: Platform, private route: ActivatedRoute) {
    this.platform.backButton.subscribe((res)=>{
      console.log(res)
    })
    this.platform.backButton.isStopped = true
   }
  protected UserDetails: {
    handle: string,
    name: string,
    mobile: string,
    age: Number,
    description: string,
  }

  protected ProfileDetails: {
    displayPicture: string,
    description: string,
    age: string,
    showInterests: Number,
  }

  ngOnInit() {
    this.route.queryParams.subscribe(values=>{
      console.log(values.id)
    })
  }

  setUserDetails(details){
    this.UserDetails = details
  }
  setProfileDetails(details){
    this.ProfileDetails = details
  }

  updateProfile(){
    console.log(this.UserDetails)
    console.log(this.ProfileDetails)
  }
}
