import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { storage } from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit {
  myForm: FormGroup 
  name: string
  
  constructor(private fB: FormBuilder, private router: Router, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.setData({})
    this.db.collection('users')
      .doc(localStorage.getItem('uid'))
      .get().subscribe(data => {
        this.setData(data.data())
        this.name = data.data().name
      })
  }

  change() {
    this.db.collection('users')
      .doc(localStorage.getItem('uid'))
      .set(this.myForm.value);
  }

  setData(data) {
    this.myForm = new FormGroup({
      name: new FormControl(data.name),
      age: new FormControl(data.age),
      gender: new FormControl(data.gender),
      city: new FormControl(data.city),
      relationshipStatus: new FormControl(data.relationshipStatus),
      duty: new FormControl(data.duty),
      music: new FormControl(data.music),
      film: new FormControl(data.film),
      serial: new FormControl(data.serial),
      book: new FormControl(data.book),
      game: new FormControl(data.game),
      hobby: new FormControl(data.hobby),
      quote: new FormControl(data.quote),
      politicalViews: new FormControl(data.politicalViews),
      ideology: new FormControl(data.ideology),
      purposeOfLife: new FormControl(data.purposeOfLife),
      mainInPeople: new FormControl(data.mainInPeople),
      lifestyle: new FormControl(data.lifestyle),
      inspiration: new FormControl(data.inspiration)
    });
  }
}
