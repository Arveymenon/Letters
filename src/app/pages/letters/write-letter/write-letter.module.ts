import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteLetterPageRoutingModule } from './write-letter-routing.module';

import { WriteLetterPage } from './write-letter.page';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteLetterPageRoutingModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
       
          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],         // outdent/indent
          [{ 'direction': 'ltr' }],                         // text direction
       
          [{ 'size': ['small', false, 'large', 'huge' ] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
       
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],
       
          ['clean'],                                         // remove formatting button
       
          // ['link', 'image', 'video']                         // link and image, video
        ]
      }
    }),
  ],
  declarations: [WriteLetterPage]
})
export class WriteLetterPageModule {}
