import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeServiceService {

  constructor() { }
  showTodayDate() {
    let ndate= new Date();
    return ndate;
  }
}
