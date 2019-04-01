import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

export interface IUser {
  id: string;
  age: number;
  name: string;
}

export interface IChannel {
  users: string[];
}

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss']
})
export class ChatsPage implements OnInit, OnDestroy{
  uid = localStorage.getItem('uid');
  users: IUser[];
  subscription: Subscription;

  constructor(private router: Router, private db: AngularFirestore) {}

  ngOnInit() {
    this.subscription = this.db.collection<IUser>('users').snapshotChanges()
      .subscribe(data => this.users = data
        .filter(user => user.payload.doc.id !== this.uid)
        .map(user => ({ id: user.payload.doc.id, ...user.payload.doc.data() })));
  }

  goToChat(id: string) {
    this.db.collection<IChannel>('channels', ref => ref.where('users', 'array-contains', this.uid))
      .get().subscribe((data) => {
        const channel = data.docs.filter(chat => chat.data().users.includes(id));
        if (channel.length) {
          this.router.navigate([ `/chat/${channel[0].id}` ]);
        } else {
          this.db.collection<IChannel>('channels').add({ users: [id, this.uid] }).then(chat => {
            this.router.navigate([ `/chat/${chat.id}` ]);
          })
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


