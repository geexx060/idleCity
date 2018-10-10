import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  credits: number;

  constructor() { }

  @Output() creditChange: EventEmitter<number> = new EventEmitter();

  getCredits(){
    this.creditChange.emit(this.credits);
  }

  setCredits(credits: number){
    this.credits = credits;
    this.creditChange.emit(this.credits);
  }


}
