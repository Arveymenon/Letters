import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProfilePageRoutingModule } from './view-profile-routing.module';

import { ViewProfilePage } from './view-profile.page';
import { UserImageComponent } from './components/user-image/user-image.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProfilePageRoutingModule,
  ],
  declarations: 
  [ViewProfilePage,
    UserImageComponent,
    UserDetailsComponent
  ]
})
export class ViewProfilePageModule {}
