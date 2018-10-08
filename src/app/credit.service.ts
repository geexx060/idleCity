import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  credits: number = 5;

  constructor() { }

  getCredits() { 
    return this.credits;
  }

}
