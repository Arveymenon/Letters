import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLetterPageRoutingModule } from './view-letter-routing.module';

import { ViewLetterPage } from './view-letter.page';
import { SafeHtmlPipeModule } from 'src/app/Shared/Pipes/SafeHtmlPipe/safe-html-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLetterPageRoutingModule,
    SafeHtmlPipeModule
  ],
  declarations: [
    ViewLetterPage
  ]
})
export class ViewLetterPageModule {}
