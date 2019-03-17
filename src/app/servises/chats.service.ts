import { Injectable } from '@angular/core';

export interface ChatsPeople {
  user1: {foto: string, name: string, lastMessage: string},
  user2: {foto: string, name: string, lastMessage: string},
  user3: {foto: string, name: string, lastMessage: string}
}

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor() { }

  public getData(): Promise<ChatsPeople> {
    return new Promise((resolve) => {
      resolve({
        user1: {foto: "./foto1", name: "Alex", lastMessage: "hello"},
        user2: {foto: "./foto2", name: "Alina", lastMessage: "what`s up?"},
        user3: {foto: "./foto3", name: "Andrey", lastMessage: "miss u"}
      });
    })
  }
}
