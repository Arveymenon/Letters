import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Models/user';

import * as moment from 'moment';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input('user')user: User;
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

  getBirthday(date){
    return moment(date).format('DD MMM');
  }

  removeFriend(){

  }

}
