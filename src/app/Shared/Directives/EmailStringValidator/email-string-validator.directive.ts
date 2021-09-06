import { Directive, HostListener, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastService } from '../../Services/Toast/toast.service';

@Directive({
  selector: '[appEmailStringValidator]'
})
export class EmailStringValidatorDirective {

  @Input('formControl') control: FormControl;

  // For email
  private string: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // For letters, numbers and space
  // private string: RegExp = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/; 
  constructor(private toast: ToastService) { }

  @HostListener('keyup', ['$event']) emailValidation(event: any){
    if (!this.string.test(event.target.value) && event.target.value.length > 0){
      if (this.control){
          this.control.setErrors({invalid: true});
      }
      this.toast.simpletoast('Kindly Provide A Valid Email ID');
      return false
    }else{
      if (this.control) {
        this.control.setErrors(null);
      }
    }
  }
}
