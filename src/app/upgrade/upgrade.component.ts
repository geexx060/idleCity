import { Component, OnInit } from '@angular/core';
import { CreditService } from '../credit.service';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  constructor(
    private creditService: CreditService,
    private rateService: RateService
    ){
  }

  ngOnInit() {
  }

  //upgrade prices
  tOneUpgradePrice: number = 20;
  tTwoUpgradePrice: number = 40;
  tThreeUpgradePrice: number = 60;
  tFourUpgradePrice: number = 100;

  //upgrade tiers 
  upgradeTier(tierLevel: number): void{
    switch(tierLevel){
      case 1: {    
        if(this.creditService.credits>=this.tOneUpgradePrice){
          this.creditService.credits-=this.tOneUpgradePrice;
          this.tOneUpgradePrice=Math.ceil(this.tOneUpgradePrice*1.4);
          this.rateService.tOneRate++;
        }
      }
      case 2: {    
        if(this.creditService.credits>=this.tTwoUpgradePrice){
          this.creditService.credits-=this.tTwoUpgradePrice;
          this.tTwoUpgradePrice=Math.ceil(this.tTwoUpgradePrice*1.4);
          this.rateService.tTwoRate++;
        }
      }
      case 3: {    
        if(this.creditService.credits>=this.tThreeUpgradePrice){
          this.creditService.credits-=this.tThreeUpgradePrice;
          this.tThreeUpgradePrice=Math.ceil(this.tThreeUpgradePrice*1.4);
          this.rateService.tThreeRate++;
        }
      }
      case 4: {    
        if(this.creditService.credits>=this.tFourUpgradePrice){
          this.creditService.credits-=this.tFourUpgradePrice;
          this.tFourUpgradePrice=Math.ceil(this.tFourUpgradePrice*1.4);
          this.rateService.tFourRate++;
        }
      }
    }
    this.rateService.calculateCreditsPerSecond();
  }
}



