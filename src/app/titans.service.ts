import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitansService {

  constructor() { }
  getAllTitan(){
    return [
      {
        name: 'philip',
        job: 'developer',
      },
      {
        name: 'kerry',
        job: 'developer',
      },
      {
        name: 'joan',
        job: 'developer',
      },
    ]
  }
}
