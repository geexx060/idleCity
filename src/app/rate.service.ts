import { Injectable, Output, EventEmitter } from '@angular/core';
import { CreditService } from './credit.service';
import { ProducerComponent }from './producer/producer.component';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(
  ) { }

  @Output() rateChange: EventEmitter<number> = new EventEmitter();

  //rates of credit production
  tOneRate: number = 1;
  tTwoRate: number = 3;
  tThreeRate: number = 4;
  tFourRate: number = 6;

  getTierRate(tierRate: number): void{
    switch(tierRate){
      case 1: {
        this.rateChange.emit(this.tOneRate);
      }
      case 2: {    
        this.rateChange.emit(this.tTwoRate);
      }
      case 3: {    
        this.rateChange.emit(this.tThreeRate);
      }
      case 4: {    
        this.rateChange.emit(this.tFourRate);
      }
    }
  }

  increaseTierRate(tierNumber: number){
    switch(tierNumber){
      case 1: {
        this.tOneRate++;
        this.rateChange.emit(this.tOneRate);
        break;
      }
      case 2: {    
        this.tTwoRate++;
        this.rateChange.emit(this.tTwoRate);
        break;
      }
      case 3: {    
        this.tThreeRate++;
        this.rateChange.emit(this.tThreeRate);
        break;
      }
      case 4: {    
        this.tFourRate++;
        this.rateChange.emit(this.tFourRate);
        break;
      }
    }
  }
}
