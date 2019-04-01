import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signIn',
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
    path: 'signIn', 
    loadChildren: './sign-in/sign-in.module#SignInPageModule' 
  },
  { 
    path: 'chat/:id', 
    loadChildren: './chat/chat.module#ChatPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
