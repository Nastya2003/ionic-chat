import { Injectable } from '@angular/core';

export interface PublicData {
  aboutMe: string, 
  status: string,
  age: number,
  city: string,
  duty: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Promise<PublicData> {
    return new Promise((resolve) => {
      resolve({
        aboutMe: 'I',
        status: 'bunny',
        age: 15,
        city: 'Moscow',
        duty: 'school girl'
      });
    })
  }
}
