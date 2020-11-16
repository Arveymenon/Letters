import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProfileManagementPageRoutingModule } from './profile-management-routing.module';


import { ProfileManagementPage } from './profile-management.page';
import { InputComponent } from './components/input-components/input/input.component';
import { ImageInputComponent } from './components/input-components/image-input/image-input.component';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { SelectComponent } from './components/input-components/select/select.component';
import { ToggleComponent } from './components/input-components/toggle/toggle.component';
import { DatePickerComponent } from './components/input-components/date-picker/date-picker.component';
import { DescriptionComponent } from './components/input-components/description/description.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProfileManagementPageRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  providers: [
    ImagePicker,
    Camera
    // WebView
  ],
  declarations: [
    ProfileManagementPage,
    InputComponent,
    ImageInputComponent,
    SelectComponent,
    ToggleComponent,
    DatePickerComponent,
    DescriptionComponent,

    ProfileDetailsComponent,
    UserDetailsComponent
  ]
})
export class ProfileManagementPageModule {}
