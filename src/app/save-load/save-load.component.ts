import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';
import { CreditService } from '../credit.service';
import { ProducerComponent } from '../producer/producer.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';

@Component({
  selector: 'app-save-load',
  templateUrl: './save-load.component.html',
  styleUrls: ['./save-load.component.css']
})
export class SaveLoadComponent implements OnInit {

  constructor(
    private creditService: CreditService,
    private rateService: RateService,
    private producerComponent: ProducerComponent,
    private upgradeComponent: UpgradeComponent
  ) { }

  ngOnInit() {
  }

  save(): void{
    // localStorage.setItem("credits", this.creditService.getCredits.toString());
    
    // localStorage.setItem("tOne", this.producerComponent.getNumberOfTiers(1).toString());
    // localStorage.setItem("tTwo", this.producerComponent.getNumberOfTiers(2).toString());
    // localStorage.setItem("tThree", this.producerComponent.getNumberOfTiers(3).toString());
    // localStorage.setItem("tFour", this.producerComponent.getNumberOfTiers(4).toString());

    // localStorage.setItem("tOnePrice", this.producerComponent.getTierPrice(1).toString());
    // localStorage.setItem("tTwoPrice", this.producerComponent.getTierPrice(2).toString());
    // localStorage.setItem("tThreePrice", this.producerComponent.getTierPrice(3).toString());
    // localStorage.setItem("tFourPrice", this.producerComponent.getTierPrice(4).toString());

    // localStorage.setItem("tOneUpgradePrice", this.upgradeComponent.getUpgradePrice(1).toString());
    // localStorage.setItem("tTwoUpgradePrice", this.upgradeComponent.getUpgradePrice(2).toString());
    // localStorage.setItem("tThreeUpgradePrice", this.upgradeComponent.getUpgradePrice(3).toString());
    // localStorage.setItem("tFourUpgradePrice", this.upgradeComponent.getUpgradePrice(4).toString());
    
    // localStorage.setItem("tOneRate", this.rateService.getTierRate(1).toString());
    // localStorage.setItem("tTwoRate", this.rateService.getTierRate(2).toString());
    // localStorage.setItem("tThreeRate", this.rateService.getTierRate(3).toString());
    // localStorage.setItem("tFourRate", this.rateService.getTierRate(4).toString());

    // this will be used later
    // localStorage.setItem("tTwoAvailable", this.tTwoAvailable.toString());
    // localStorage.setItem("tThreeAvailable", this.tThreeAvailable.toString());
    // localStorage.setItem("tFourAvailable", this.tFourAvailable.toString());
  }

  load(): void{
    // this.creditService.credits = parseInt(localStorage.getItem("credits"));

    // this.producerComponent.tOne = parseInt(localStorage.getItem("tOne"));
    // this.producerComponent.tTwo = parseInt(localStorage.getItem("tTwo"));
    // this.producerComponent.tThree = parseInt(localStorage.getItem("tThree"));
    // this.producerComponent.tFour = parseInt(localStorage.getItem("tFour"));

    // this.producerComponent.tOnePrice = parseInt(localStorage.getItem("tOnePrice"));
    // this.producerComponent.tTwoPrice = parseInt(localStorage.getItem("tTwoPrice"));
    // this.producerComponent.tThreePrice = parseInt(localStorage.getItem("tThreePrice"));
    // this.producerComponent.tFourPrice = parseInt(localStorage.getItem("tFourPrice"));
    
    // this.rateService.tOneRate = parseInt(localStorage.getItem("tOneRate"));
    // this.rateService.tTwoRate = parseInt(localStorage.getItem("tTwoRate"));
    // this.rateService.tThreeRate = parseInt(localStorage.getItem("tThreeRate"));
    // this.rateService.tFourRate = parseInt(localStorage.getItem("tFourRate"));
  
    // this.upgradeComponent.tOneUpgradePrice = parseInt(localStorage.getItem("tOneUpgradePrice"));
    // this.upgradeComponent.tTwoUpgradePrice = parseInt(localStorage.getItem("tTwoUpgradePrice"));
    // this.upgradeComponent.tThreeUpgradePrice = parseInt(localStorage.getItem("tThreeUpgradePrice"));
    // this.upgradeComponent.tFourUpgradePrice = parseInt(localStorage.getItem("tFourUpgradePrice"));
  
    // // this.tTwoAvailable = JSON.parse(localStorage.getItem("tTwoAvailable"));
    // // this.tThreeAvailable = JSON.parse(localStorage.getItem("tThreeAvailable"));
    // // this.tFourAvailable = JSON.parse(localStorage.getItem("tFourAvailable"));
    // this.producerComponent.calculateCreditsPerSecond()
  }

}
