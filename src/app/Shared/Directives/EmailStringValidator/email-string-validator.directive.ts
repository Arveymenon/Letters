import { Directive, HostListener, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastService } from '../../Services/Toast/toast.service';

@Directive({
  selector: '[appEmailStringValidator]'
})
export class EmailStringValidatorDirective {

  @Input('formControl') control: FormControl

  private string: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  constructor(private toast: ToastService) { }
  
  @HostListener('change', ["$event"]) emailValidation(event: KeyboardEvent){
    if(!this.string.test(event.target['value'])){
      if(this.control){
          this.control.setErrors({'invalid': true})
      }
      this.toast.simpletoast('Kindly Provide A Valid Email ID')
    }else{
      if(this.control)
        this.control.setErrors(null)
    }
  }
}
