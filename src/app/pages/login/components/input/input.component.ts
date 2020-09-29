import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input('placeholder') placeholder: String;
  @Input('value') value: String;
  @Input('control') control: FormControl;
  
  constructor() { }

  ngOnInit() {
    if(this.value)
      this.control.setValue(this.value)
  }

}
