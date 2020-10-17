import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Models/user';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  user = {
    _id: '',
    name: 'Arvey',
    handle: 'RV',
    email: 'arvey@gmail.com',
    mobile: '9920807002',
    dob: new Date(),
    interests: ['Lovey', 'Dovey'],
    description: 'kaafi data',
  }
  
  constructor() { }
  
  ngOnInit() {
  }

}
