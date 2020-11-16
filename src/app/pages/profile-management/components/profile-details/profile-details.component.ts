import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Shared/Services/Authentication/auth.service';

@Component({
  selector: "app-profile-details",
  templateUrl: "./profile-details.component.html",
  styleUrls: ["./profile-details.component.scss"],
})
export class ProfileDetailsComponent implements OnInit {
  @Input('value') values: {
    interests: Array<string>,
    description: string,
    showInterests: boolean,
    showDescription: boolean,
    displayPicture: boolean,
    dob: boolean,
  }
 @Output('setProfileDetails') setUserProfileDetails = new EventEmitter()

  public interests = [
    { id: '5f72f14d6e321073dea34abd', interest: "Skipping" },
    { id: '5f72f16b6e321073dea34abe', interest: "Jogging" },
    { id: '5f72f17e6e321073dea34abf', interest: "Sleeping" },
  ];

  public description = new FormControl('')
  
  public selectControl = new FormControl('', Validators.required)
  // Toggle Form Controls
  public displayPicture = new FormControl(false)
  public showDescription = new FormControl(true)
  public dob = new FormControl(false)
  public showInterests = new FormControl(true)


  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.values = {
      interests: this.selectControl.value,
      description: this.description.value,
      showInterests: this.showInterests.value,
      showDescription: this.showDescription.value,
      displayPicture: this.displayPicture.value,
      dob: this.dob.value,
    }
    this.authService.getUser.then((user: any)=>{
      console.log(user)
      if(user){
        this.selectControl.setValue(user.interests)
        this.description.setValue(user.description)

        this.displayPicture.setValue(user.showDisplayPicture)
        this.showDescription.setValue(user.showDescription)
        this.dob.setValue(user.showAge)
        this.showInterests.setValue(user.showInterests)
      }
    })
  }

  ngDoCheck() {
    this.values.interests = this.selectControl.value
    this.values.description = this.description.value
    this.values.showInterests = this.showInterests.value
    this.values.showDescription = this.showDescription.value
    this.values.displayPicture = this.displayPicture.value
    this.values.dob = this.dob.value
    this.updateValues()
  }

  updateValues(){
    this.setUserProfileDetails.emit(this.values)
  }

}
