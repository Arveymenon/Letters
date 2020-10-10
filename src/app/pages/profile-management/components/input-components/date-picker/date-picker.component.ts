import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Input('placeholder') placeholder: String;
  @Input('control') control: FormControl;
  @Input('icon') icon: string;
  constructor() { }

  ngOnInit() {}

}
