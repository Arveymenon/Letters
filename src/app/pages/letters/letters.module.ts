import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LettersPageRoutingModule } from './letters-routing.module';

import { LettersPage } from './letters.page';
import { SafeHtmlPipeModule } from 'src/app/Shared/Pipes/SafeHtmlPipe/safe-html-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LettersPageRoutingModule,
    SafeHtmlPipeModule
  ],
  declarations: [
    LettersPage,
  ]
})
export class LettersPageModule {}
