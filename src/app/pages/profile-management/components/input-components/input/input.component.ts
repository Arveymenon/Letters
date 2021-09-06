import { Component, OnInit, Input,  } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit{
  @Input('placeholder') placeholder: String;
  @Input('control') control: FormControl;
  @Input('type') type: string;
  @Input('icon') icon: string;

  constructor() { }

  ngOnInit() {
  }

}
