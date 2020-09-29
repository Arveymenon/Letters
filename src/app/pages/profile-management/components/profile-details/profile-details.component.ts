import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-profile-details",
  templateUrl: "./profile-details.component.html",
  styleUrls: ["./profile-details.component.scss"],
})
export class ProfileDetailsComponent implements OnInit {
  @Input('value') values: {
    displayPicture: String,
    description: String,
    age: String,
    showInterests: Number,
  }
 @Output('setProfileDetails') setProfileDetails = new EventEmitter()

  protected interests = [
    { id: 1, interest: "Skipping" },
    { id: 2, interest: "Running" },
    { id: 3, interest: "Jumping" },
  ];
  protected key = 'id';
  protected value = 'interest';
  protected selectControl = new FormControl('', Validators.required)

  // Toggle Form Controls
  protected displayPicture = new FormControl(false)
  protected description = new FormControl(true)
  protected age = new FormControl(false)
  protected showInterests = new FormControl(true)


  constructor() {}

  ngOnInit() {
    this.values = {
      displayPicture: this.displayPicture.value,
      description: this.description.value,
      age: this.age.value,
      showInterests: this.showInterests.value,
    }
  }

  ngDoCheck() {
    if (this.displayPicture.value != '') {
      this.values.displayPicture = this.displayPicture.value
      this.updateValues()
    }
    if (this.description.value != '') {
      this.values.description = this.description.value
      this.updateValues()
    }
    if (this.age.value != '') {
      this.values.age = this.age.value
      this.updateValues()
    }
    if (this.age.value != '') {
      this.values.showInterests = this.showInterests.value
      this.updateValues()
    }
  }

  updateValues(){
    this.setProfileDetails.emit(this.values)
  }

}
