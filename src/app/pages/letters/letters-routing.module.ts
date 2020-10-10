import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LettersPage } from './letters.page';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LettersPage },
      { path: 'view',
        loadChildren: () => import('./view-letter/view-letter.module').then( m => m.ViewLetterPageModule)
      },
      { path: 'write',
        loadChildren: () => import('./write-letter/write-letter.module').then( m => m.WriteLetterPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LettersPageRoutingModule {}
