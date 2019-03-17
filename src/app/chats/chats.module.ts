import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ChatsPage } from './chats.page';
import { ChatsService } from '../servises/chats.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChatsPage
      }
    ])
  ],
  declarations: [ChatsPage],
  providers: [
    ChatsService
  ]
})
export class ChatsPageModule {}
