import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: 'letters', pathMatch: 'full' },
      {
        path: 'letters',
        loadChildren: () => import('./../letters/letters.module')
        .then( m => m.LettersPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./../profile-management/profile-management.module')
        .then( m => m.ProfileManagementPageModule)
      },
      {
        path: 'friends',
        loadChildren: () => import('./../friends/friends.module').then( m => m.FriendsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
