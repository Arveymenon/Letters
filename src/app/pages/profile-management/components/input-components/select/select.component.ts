import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input('options') options: []
  @Input('key') key: String
  @Input('multiple') multiple: Boolean
  @Input('placeholder') placeholder: String
  @Input('value') value: String
  @Input('control') control: FormControl
  @Output('change') changed = new EventEmitter()

  constructor() {
  }
  
  ngOnInit() {
  }

  change(ev){
    console.log(ev)
    this.changed.emit(ev.value)
  }


}
