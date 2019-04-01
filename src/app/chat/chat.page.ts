import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl } from '@angular/forms';

export interface IMessage {
  text: string;
  from: string;
  date: number;
  id?: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, OnDestroy {
  channelId: string
  messages: IMessage[] = []
  msg: string
  subscription: Subscription
  /*myForm = new FormGroup({
    msg: new FormControl()
  });*/

  constructor(private activatedRoute: ActivatedRoute, private db: AngularFirestore) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => this.channelId = param.get('id'));
    this.subscription = this.db.collection<IMessage>(`channels/${this.channelId}/messages`, ref => ref.orderBy('date'))
      .stateChanges([ 'added' ])
      .subscribe(data => this.messages = [ ...this.messages,
        ...data.map(msg => ({ ...msg.payload.doc.data(), id: msg.payload.doc.id })) ]);
  }

  send() {
    if (this.msg) {
      this.db.collection<IMessage>(`channels/${this.channelId}/messages`)
        .add({ from: localStorage.getItem('uid'),
               text: this.msg,
               date: new Date().getTime() });
      this.msg = '';
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
