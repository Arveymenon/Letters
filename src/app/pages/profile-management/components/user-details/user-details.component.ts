import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/Shared/Services/Authentication/auth.service';
import { HttpService } from 'src/app/Shared/Services/HttpService/http.service';
import { ToastService } from 'src/app/Shared/Services/Toast/toast.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

  valid_handle: boolean
  valid_mobile: boolean

  @Input('value') values: {
    handle: string,
    name: string,
    mobile: string,
    dob: string,
    valid: boolean
  }
  @Output('setUserDetails') setUserDetails = new EventEmitter()

  public handle = new FormControl
  public name = new FormControl
  public mobile = new FormControl
  public dob = new FormControl
  constructor(private http: HttpService, private toast: ToastService, private authService: AuthService) { 
    // this.values = {
    //   name: '',
    //   handle: '',
    //   mobile: '',
    //   dob: '',
    //   valid: true
    // }
  }

  ngOnInit() {
    console.log(this.values)
    this.values = {
      name: '',
      handle: '',
      mobile: '',
      dob: '',
      valid: true
    }
    this.authService.getUser.then((user: any)=>{
      if(user){
        this.handle.setValue(user.handle)
        this.name.setValue(user.name)
        this.mobile.setValue(user.mobile)
        this.dob.setValue(user.dob)
        this.values.valid = true
      }
    })
  }

  ngDoCheck() {
    this.values = {
      handle: this.handle.value,
      name: this.name.value,
      mobile: this.mobile.value,
      dob: this.dob.value,
      valid: true
    }
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
        // TO BE SET FALSE
          if(id == 1)
            this.valid_mobile = true
          else
            this.valid_handle = true
        this.toast.simpletoast(res.message)
      }
      
      this.values.valid = this.valid_mobile && this.valid_handle ? true : false
    })
  }

  updateValues(){
    this.setUserDetails.emit(this.values)
  }

}
