import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  uid: string

  public appPages = [
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Chats',
      url: '/chats',
      icon: 'chatboxes'
    },
    {
      title: 'Find Friends',
      url: '/findFriends',
      icon: 'contacts'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AngularFireAuth, 
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.auth.authState.subscribe(user => {
      this.uid = user && user.uid;
      if (this.uid) {
        localStorage.setItem('uid', this.uid);
      } else {
        localStorage.removeItem('uid');
        this.router.navigate(['/signIn']);
      }
    });
  }

  logOut() {
    this.auth.auth.signOut();
  }
}
