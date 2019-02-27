import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';

import { ProfilePage } from './profile.page';
import { DataService } from '../servises/data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfilePage
      }
    ])
  ],
  declarations: [ProfilePage], 
  providers: [
    DataService
  ]
})
export class ProfilePageModule {}
