import { Component, OnInit } from '@angular/core';
import { CreditService } from '../credit.service';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  constructor(
    private creditService: CreditService,
    private rateService: RateService
    ){
  }

  ngOnInit() {
    setInterval(()=>{this.produce()},1000);
  }

  //produce credits
  produce(): void{
    this.creditService.credits+=this.tOne*this.rateService.tOneRate
                  +this.tTwo*this.rateService.tTwoRate
                  +this.tThree*this.rateService.tThreeRate
                  +this.tFour*this.rateService.tFourRate;
  }

  //if tiers are available
  tTwoAvailable: boolean = false;
  tThreeAvailable: boolean = false;
  tFourAvailable: boolean = false;

  //number of each tier
  tOne: number = 0;
  tTwo: number = 0;
  tThree: number = 0;
  tFour: number = 0;
  
  //prices for tiers
  tOnePrice: number = 5;
  tTwoPrice: number = 10;
  tThreePrice: number = 15;
  tFourPrice: number = 25;

  getTierOne():number{
    return this.tOne;
  }

  //buy tiers 
  buyTier(tierLevel: number): void{
    switch(tierLevel){
      case 1: {    
        if(this.creditService.credits>=this.tOnePrice){
        this.tOne+=1;
        this.creditService.credits-=this.tOnePrice;
        this.tOnePrice=Math.ceil(this.tOnePrice*1.1);
        }
      }
      case 2: {    
        if(this.creditService.credits>=this.tTwoPrice){
        this.tTwo+=1;
        this.creditService.credits-=this.tTwoPrice;
        this.tTwoPrice=Math.ceil(this.tTwoPrice*1.1);
        }
      }
      case 3: {    
        if(this.creditService.credits>=this.tThreePrice){
        this.tThree+=1;
        this.creditService.credits-=this.tThreePrice;
        this.tThreePrice=Math.ceil(this.tThreePrice*1.1);
        }
      }
      case 4: {    
        if(this.creditService.credits>=this.tFourPrice){
        this.tFour+=1;
        this.creditService.credits-=this.tFourPrice;
        this.tFourPrice=Math.ceil(this.tFourPrice*1.1);
        }
      }
    }
    this.rateService.calculateCreditsPerSecond();
  }
}
