import { Injectable } from '@angular/core';
import { CreditService } from './credit.service';
import { ProducerComponent }from './producer/producer.component';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(
    private producerComponent: ProducerComponent
  ) { }
  creditsPerSecond: number = 0;

  //rates of credit production
  tOneRate: number = 1;
  tTwoRate: number = 3;
  tThreeRate: number = 4;
  tFourRate: number = 6;

  //calculate crdits per second
  calculateCreditsPerSecond(): void{
    this.creditsPerSecond = this.producerComponent.tOne*this.tOneRate
                            +this.producerComponent.tTwo*this.tTwoRate
                            +this.producerComponent.tThree*this.tThreeRate
                            +this.producerComponent.tFour*this.tFourRate;
  }



}
