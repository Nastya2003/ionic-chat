import { Component, OnInit } from '@angular/core';
import { ChatsService, ChatsPeople } from '../servises/chats.service'

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss']
})
export class ChatsPage implements OnInit {
  public items : any

  constructor(private chatsServ: ChatsService) {
  }

  ngOnInit() {
    this.chatsServ.getData().then((data) => {
      this.items = {
        user1: [data.user1.foto, data.user1.name, data.user1.lastMessage],
        user2: [data.user2.foto, data.user2.name, data.user2.lastMessage],
        user3: [data.user3.foto, data.user3.name, data.user3.lastMessage]
      }
    })
  }
}


