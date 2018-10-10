import { Component, OnInit } from '@angular/core';
import { CreditService } from '../credit.service';
import { RateService } from '../rate.service';
import { ProducerComponent } from '../producer/producer.component';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  constructor(
    private creditService: CreditService,
    private rateService: RateService,
    private producerComponent: ProducerComponent
    ){
  }

  ngOnInit() {
    this.getCredits();
  }
  
  credits: number;

  getCredits(): void {
    this.creditService.creditChange
      .subscribe(credits => this.credits = credits);
  }

  setCredits(credits: number): void {
    this.creditService.setCredits(credits);
    // this.creditService.credits = this.credits;
  }

  //rates of credit production
  tOneRate: number = 1;
  tTwoRate: number = 3;
  tThreeRate: number = 4;
  tFourRate: number = 6;

  //upgrade prices
  tOneUpgradePrice: number = 20;
  tTwoUpgradePrice: number = 40;
  tThreeUpgradePrice: number = 60;
  tFourUpgradePrice: number = 100;

  getUpgradePrice(tierLevel: number): number{
    switch(tierLevel){
      case 1: {
        return this.tOneUpgradePrice;
      }
      case 2: {    
        return this.tTwoUpgradePrice;
      }
      case 3: {    
        return this.tThreeUpgradePrice;
      }
      case 4: {    
        return this.tFourUpgradePrice;
      }
    }
  }

  //upgrade tiers 
  upgradeTier(tierLevel: number): void{
    switch(tierLevel){
      case 1: {    
        if(this.credits>=this.tOneUpgradePrice){
          this.credits-=this.tOneUpgradePrice;
          this.tOneUpgradePrice=Math.ceil(this.tOneUpgradePrice*1.4);
          this.rateService.increaseTierRate(1);
        }
      }
      case 2: {    
        if(this.credits>=this.tTwoUpgradePrice){
          this.credits-=this.tTwoUpgradePrice;
          this.tTwoUpgradePrice=Math.ceil(this.tTwoUpgradePrice*1.4);
          this.rateService.increaseTierRate(2);
        }
      }
      case 3: {    
        if(this.credits>=this.tThreeUpgradePrice){
          this.credits-=this.tThreeUpgradePrice;
          this.tThreeUpgradePrice=Math.ceil(this.tThreeUpgradePrice*1.4);
          this.rateService.increaseTierRate(3);
        }
      }
      case 4: {    
        if(this.credits>=this.tFourUpgradePrice){
          this.credits-=this.tFourUpgradePrice;
          this.tFourUpgradePrice=Math.ceil(this.tFourUpgradePrice*1.4);
          this.rateService.increaseTierRate(4);
        }
      }
    }
    console.log("upgrade " + this.credits);
    this.setCredits(this.credits);
  }
}



