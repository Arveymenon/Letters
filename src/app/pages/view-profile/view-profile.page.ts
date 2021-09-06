import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { User } from 'src/app/Shared/Models/user';
import { UserOptionsComponent } from './components/user-options/user-options.component';

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
  };

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async showOptions(ev: any){
      const popover = await this.popoverController.create({
        component: UserOptionsComponent,
        cssClass: 'my-custom-class',
        event: ev,
        translucent: true
      });
      return await popover.present();
  }

}
