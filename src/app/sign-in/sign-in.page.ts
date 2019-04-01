import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  myForm: FormGroup

  constructor(private auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  signInHandler() {
    this.auth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(data => 
    {
      this.router.navigate(['/chats'])
    })
  }

  signUpHandler() {
    this.auth.auth.createUserWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(data => 
    {
      this.router.navigate(['/profile'])
    })
  }
}
