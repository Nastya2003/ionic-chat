import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule'
  },
  {
    path: 'chats',
    loadChildren: './chats/chats.module#ChatsPageModule'
  },
  {
    path: 'findFriends',
    loadChildren: './chats/chats.module#ChatsPageModule'
  },
  {
    path: 'settings',
    loadChildren: './chats/chats.module#ChatsPageModule'
  },
  {
    path: 'login',
    loadChildren: './chats/chats.module#ChatsPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
