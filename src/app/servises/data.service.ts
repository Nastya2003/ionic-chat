import { Injectable } from '@angular/core';

export interface PublicData {
  status: string,
  age: number,
  city: string,
  duty: string,
  music: string,
  film: string,
  serial: string,
  book: string,
  game: string,
  hobby: string,
  quote: string,
  politicalViews: string,
  ideology: string,
  purposeOfLife: string,
  mainInPeople: string,
  lifestyle: string,
  inspiration: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Promise<PublicData> {
    return new Promise((resolve) => {
      resolve({
        status: 'bunny',
        age: 15,
        city: 'Moscow',
        duty: 'school girl',
        music: 'rock',
        film: 'Requiem for a Dream',
        serial: 'none',
        book: 'Pet Sematary',
        game: '2048',
        hobby: 'coding',
        quote: 'I`m not a slave to a world that doesn`t give a shit',
        politicalViews: 'none',
        ideology: 'freethinker',
        purposeOfLife: 'make people happy',
        mainInPeople: 'loyalty',
        lifestyle: 'healthy',
        inspiration: 'nature'
      });
    })
  }
}
