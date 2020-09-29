import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, DoCheck {

  @Input('value') values: {
    handle: string,
    name: string,
    mobile: string,
    age: Number,
    description: string
  }
  @Output('setUserDetails') setUserDetails = new EventEmitter()

  public handle = new FormControl
  public name = new FormControl
  public mobile = new FormControl
  public age = new FormControl
  public description = new FormControl
  constructor() { }

  ngOnInit() {
    this.values = {
      handle: this.handle.value,
      name: this.handle.value,
      mobile: this.mobile.value,
      age: this.age.value,
      description: this.description.value,
    }
    console.log(this.values)
  }

  ngDoCheck() {
    if (this.handle.value != '') {
      this.values.handle = this.handle.value
      this.updateValues()
    }
    if (this.name.value != '') {
      this.values.name = this.name.value
      this.updateValues()
    }
    if (this.mobile.value != '') {
      this.values.mobile = this.mobile.value
      this.updateValues()
    }
    if (this.age.value != '') {
      this.values.age = this.age.value
      this.updateValues()
    }
    if (this.description.value != '') {
      this.values.description = this.description.value
      this.updateValues()
    }
  }
  
  updateValues(){
    this.setUserDetails.emit(this.values)
  }

}
