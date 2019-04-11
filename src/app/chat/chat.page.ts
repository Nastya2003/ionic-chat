import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl } from '@angular/forms';

export interface IMessage {
  text: string;
  from: string;
  date: number;
  name: string;
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
  subs: Subscription
  myForm = new FormGroup({
    msg: new FormControl()
  });
  name: string

  @ViewChild("msgs") m: ElementRef;

  constructor(private activatedRoute: ActivatedRoute, private db: AngularFirestore, 
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => this.channelId = param.get('id'));
    this.subscription = this.db.collection<IMessage>(`channels/${this.channelId}/messages`, ref => ref.orderBy('date'))
      .stateChanges([ 'added' ])
      .subscribe(data => {
          this.messages = [ ...this.messages,
        ...data.map(msg => ({ ...msg.payload.doc.data(), id: msg.payload.doc.id })) ]
          setTimeout(() => this.m.nativeElement.scrollTop = this.m.nativeElement.scrollHeight + 100);
        }
      );
    this.db.collection('users').doc(localStorage.getItem('uid')).get().subscribe(value => {
      this.name = value.data().name;
    })
  }

  send() {
    if (this.myForm.value.msg) {
      this.db.collection<IMessage>(`channels/${this.channelId}/messages`)
        .add({ from: localStorage.getItem('uid'),
               name: this.name,
               text: this.myForm.value.msg,
               date: new Date().getTime() });
      this.myForm.reset();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  back() {
    this.router.navigate([ `/chats` ]);
  }
}
