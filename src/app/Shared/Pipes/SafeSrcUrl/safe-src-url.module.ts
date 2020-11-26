import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeSrcUrlPipe } from './safe-src-url.pipe';



@NgModule({
  declarations: [SafeSrcUrlPipe],
  exports: [SafeSrcUrlPipe],
  imports: [
    CommonModule
  ]
})
export class SafeSrcUrlModule { }
