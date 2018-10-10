import { Component, OnInit, HostBinding } from '@angular/core';
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
    ){}

  creditsPerSecond: number = 0;
  credits: number = 50;
  tOneRate:number;

  ngOnInit() {
    setInterval(()=>{this.produce()},1000);
    this.getCredits();
    this.getTier();
  }

  getCredits(): void {
    this.creditService.creditChange
      .subscribe(credits => {
        this.credits = credits
      });
  }

  getTier(): void {
    console.log("test");
    this.rateService.rateChange.subscribe(tOneRate => {
       this.calculateCreditsPerSecond();
      })
  }

  setCredits(credits: number): void {
    this.creditService.setCredits(credits);
  }

  //produce credits
  produce(): void{
    this.credits+=this.creditsPerSecond;
    this.setCredits(this.credits);
  }

  //calculate credits per second
  calculateCreditsPerSecond(): void{
    this.creditsPerSecond = this.tOne*this.rateService.tOneRate
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

  getCreditsPerSecond(): number{
    return this.creditsPerSecond;
  }

  getNumberOfTiers(numTiers: number): number{
    switch(numTiers){
      case 1: {
        return this.tOne;
      }
      case 2: {    
        return this.tTwo;
      }
      case 3: {    
        return this.tThree;
      }
      case 4: {    
        return this.tFour;
      }
    }
  }

  getTierPrice(tierLevel: number): number{
    switch(tierLevel){
      case 1: {
        return this.tOnePrice;
      }
      case 2: {    
        return this.tTwoPrice;
      }
      case 3: {    
        return this.tThreePrice;
      }
      case 4: {    
        return this.tFourPrice;
      }
    }
  }

  //buy tiers 
  buyTier(tierLevel: number): void{
    switch(tierLevel){
      case 1: {    
        if(this.credits>=this.tOnePrice){
        this.tOne+=1;
        this.credits-=this.tOnePrice;
        this.tOnePrice=Math.ceil(this.tOnePrice*1.1);
        }
        break;
      }
      case 2: {    
        if(this.credits>=this.tTwoPrice){
        this.tTwo+=1;
        this.credits-=this.tTwoPrice;
        this.tTwoPrice=Math.ceil(this.tTwoPrice*1.1);
        }
        break;
      }
      case 3: {    
        if(this.credits>=this.tThreePrice){
        this.tThree+=1;
        this.credits-=this.tThreePrice;
        this.tThreePrice=Math.ceil(this.tThreePrice*1.1);
        }
        break;
      }
      case 4: {    
        if(this.credits>=this.tFourPrice){
        this.tFour+=1;
        this.credits-=this.tFourPrice;
        this.tFourPrice=Math.ceil(this.tFourPrice*1.1);
        }
        break;
      }
    }
    this.calculateCreditsPerSecond();
  }
}
