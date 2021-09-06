import { Component, EventEmitter, Input, ViewChild, OnInit, Output, ElementRef, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { MatAutocomplete } from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit, OnChanges {
  @Input('options') options: any[]
  @Input('key') key: String
  @Input('multiple') multiple: Boolean
  @Input('placeholder') placeholder: String
  @Input('value') value: String
  @Input('control') control = new FormControl
  @Output('change') changed = new EventEmitter()

  // constructor() {
  // }
  
  ngOnInit() {
  }

  change(ev){
    console.log(ev);
    this.changed.emit(ev.value);
  }
  visible = true;
  selectable = true;
  removable = true;
  search = new FormControl()
  separatorKeysCodes: number[] = [13, 188];
  filteredOptions: Observable<any[]>;
  selectedOptions: any[] = [];
  
  // options: string[] =;

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  // @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredOptions = this.search.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>{
        if(fruit){
          return this._filter(fruit)
        }else{
          if(this.options){
            return this.options.slice()
          }
        }
      }));
  }

  ngOnChanges(){
    this.control.setValue(this.selectedOptions)
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.selectedOptions.push({interest: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.search.setValue(null);
  }

  remove(interest: string): void {
    const index = this.selectedOptions.findIndex(o=>o.interest == interest);
    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
  }

  // selected(event: MatAutocompleteSelectedEvent): void {
  selected(event: any): void {
    // console.log(event.option)
    // console.log(event.option.value)
    const option = this.selectedOptions.find(o=>o.interest == event.option.value.interest);
    if(!option){
      this.selectedOptions.push(event.option.value);
      this.fruitInput.nativeElement.value = '';
      this.search.setValue(null);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(fruit => fruit.interest.toLowerCase().indexOf(filterValue) === 0);
  }


}
