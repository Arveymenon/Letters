import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteLetterPage } from './write-letter.page';

const routes: Routes = [
  {
    path: '',
    component: WriteLetterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteLetterPageRoutingModule {}
