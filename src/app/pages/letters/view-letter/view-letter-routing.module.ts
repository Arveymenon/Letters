import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLetterPage } from './view-letter.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLetterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLetterPageRoutingModule {}
