import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input('placeholder') placeholder: String;
  @Input('control') control: FormControl;
  constructor() { }

  ngOnInit() {}

}
