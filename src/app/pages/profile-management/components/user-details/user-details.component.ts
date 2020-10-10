import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/Shared/Services/HttpService/http.service';
import { ToastService } from 'src/app/Shared/Services/Toast/toast.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, DoCheck {

  valid_handle: boolean
  valid_mobile: boolean

  @Input('value') values: {
    handle: string,
    name: string,
    mobile: string,
    dob: Number,
    valid: boolean
  }
  @Output('setUserDetails') setUserDetails = new EventEmitter()

  public handle = new FormControl()
  public name = new FormControl
  public mobile = new FormControl
  public dob = new FormControl
  constructor(private http: HttpService, private toast: ToastService) { }

  ngOnInit() {
    this.values = {
      handle: this.handle.value,
      name: this.handle.value,
      mobile: this.mobile.value,
      dob: this.dob.value,
      valid: false,
    }
    console.log(this.values)
  }

  ngDoCheck() {
    this.values.handle = this.handle.value
    this.values.name = this.name.value
    this.values.mobile = this.mobile.value
    this.values.dob = this.dob.value
    this.updateValues()
  }
  
  checkIfExists(id){
    let reqBody = {
      findBy: id,
      findText: id == 1 ? this.mobile.value : this.handle.value
    }
    this.http.post('customer/check',reqBody).subscribe((res: any)=>{
      if(!res.error){
        if(id == 1)
          this.valid_mobile = true
        else
          this.valid_handle = true
      }else{
          if(id == 1)
            this.valid_mobile = false
          else
            this.valid_handle = false
        this.toast.simpletoast(res.message)
      }
      
      this.values.valid = this.valid_mobile && this.valid_handle
    })
  }

  updateValues(){
    this.setUserDetails.emit(this.values)
  }

}
