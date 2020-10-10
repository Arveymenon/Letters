import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';

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
 @Output('setProfileDetails') setProfileDetails = new EventEmitter()

  protected interests = [
    { id: '5f72f14d6e321073dea34abd', interest: "Skipping" },
    { id: '5f72f16b6e321073dea34abe', interest: "Jogging" },
    { id: '5f72f17e6e321073dea34abf', interest: "Sleeping" },
  ];
  protected key = 'id';
  protected value = 'interest';

  protected description = new FormControl('')
  
  protected selectControl = new FormControl('', Validators.required)
  // Toggle Form Controls
  protected displayPicture = new FormControl(false)
  protected show_description = new FormControl(true)
  protected dob = new FormControl(false)
  protected showInterests = new FormControl(true)


  constructor() {}

  ngOnInit() {
    this.values = {
      interests: this.selectControl.value,
      description: this.description.value,
      showInterests: this.showInterests.value,
      showDescription: this.show_description.value,
      displayPicture: this.displayPicture.value,
      dob: this.dob.value,
    }
  }

  ngDoCheck() {
    this.values.interests = this.selectControl.value
    this.values.description = this.description.value
    this.values.showInterests = this.showInterests.value
    this.values.showDescription = this.show_description.value
    this.values.displayPicture = this.displayPicture.value
    this.values.dob = this.dob.value
    this.updateValues()
  }

  updateValues(){
    this.setProfileDetails.emit(this.values)
  }

}
