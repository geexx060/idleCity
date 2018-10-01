import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idleCity';
  
  credits: number = 5;

  tOne: number = 0;
  tTwo: number = 0;
  tThree: number = 0;
  tFour: number = 0;
  
  creditsPerSecond: number = 0;

  //prices for tiers
  tOnePrice: number = 5;
  tTwoPrice: number = 10;
  tThreePrice: number = 15;
  tFourPrice: number = 25;

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

  //if tiers are available
  tTwoAvailable: boolean = false;
  tThreeAvailable: boolean = false;
  tFourAvailable: boolean = false;

  constructor(){
    setInterval(()=>{this.produce()},1000)
  }

  collectCredit(): void{
    this.credits+=1;
  }

  //buy tiers 
  hireOne(): void{
    if(this.credits>=this.tOnePrice){
      this.tOne+=1;
      this.credits-=this.tOnePrice;
      this.tOnePrice=Math.ceil(this.tOnePrice*1.1);
      this.calculateCreditsPerSecond();
    }
  }

  hireTwo(): void{
    if(this.credits>=this.tTwoPrice){
      this.tTwo+=1;
      this.credits-=this.tTwoPrice;
      this.tTwoPrice=Math.ceil(this.tTwoPrice*1.1);
      this.calculateCreditsPerSecond();
    }
  }

  hireThree(): void{
    if(this.credits>=this.tThreePrice){
      this.tThree+=1;
      this.credits-=this.tThreePrice;
      this.tThreePrice=Math.ceil(this.tThreePrice*1.1);
      this.calculateCreditsPerSecond();
    }
  }

  hireFour(): void{
    if(this.credits>=this.tFourPrice){
      this.tFour+=1;
      this.credits-=this.tFourPrice;
      this.tFourPrice=Math.ceil(this.tFourPrice*1.1);
      this.calculateCreditsPerSecond();
    }
  }

  //produce credits
  produce(): void{
    this.credits+=this.tOne*this.tOneRate
                  +this.tTwo*this.tTwoRate
                  +this.tThree*this.tThreeRate
                  +this.tFour*this.tFourRate;
  }

  //calculate crdits per second
  calculateCreditsPerSecond(): void{
    this.creditsPerSecond = this.tOne*this.tOneRate
                            +this.tTwo*this.tTwoRate
                            +this.tThree*this.tThreeRate
                            +this.tFour*this.tFourRate;
  }


  //Upgrades
  upgradeOne(): void{
    if(this.credits>=this.tOneUpgradePrice){
      this.credits-=this.tOneUpgradePrice;
      this.tOneUpgradePrice=Math.ceil(this.tOneUpgradePrice*1.4);
      this.tOneRate++;
      this.calculateCreditsPerSecond()
    }
  }

  upgradeTwo(): void{
    if(this.credits>=this.tTwoUpgradePrice){
      this.credits-=this.tTwoUpgradePrice;
      this.tTwoUpgradePrice=Math.ceil(this.tTwoUpgradePrice*1.4);
      this.tTwoRate++;
      this.calculateCreditsPerSecond()
    }
  }

  upgradeThree(): void{
    if(this.credits>=this.tThreeUpgradePrice){
      this.credits-=this.tThreeUpgradePrice;
      this.tThreeUpgradePrice=Math.ceil(this.tThreeUpgradePrice*1.4);
      this.tThreeRate++;
      this.calculateCreditsPerSecond()
    }
  }

  upgradeFour(): void{
    if(this.credits>=this.tFourUpgradePrice){
      this.credits-=this.tFourUpgradePrice;
      this.tFourUpgradePrice=Math.ceil(this.tFourUpgradePrice*1.4);
      this.tFourRate++;
      this.calculateCreditsPerSecond()
    }
  }

  save(): void{
    localStorage.setItem("credits", this.credits.toString());
    
    localStorage.setItem("tOne", this.tOne.toString());
    localStorage.setItem("tTwo", this.tTwo.toString());
    localStorage.setItem("tThree", this.tThree.toString());
    localStorage.setItem("tFour", this.tFour.toString());

    localStorage.setItem("tOnePrice", this.tOnePrice.toString());
    localStorage.setItem("tTwoPrice", this.tTwoPrice.toString());
    localStorage.setItem("tThreePrice", this.tThreePrice.toString());
    localStorage.setItem("tFourPrice", this.tFourPrice.toString());

    localStorage.setItem("tOneUpgradePrice", this.tOneUpgradePrice.toString());
    localStorage.setItem("tTwoUpgradePrice", this.tTwoUpgradePrice.toString());
    localStorage.setItem("tThreeUpgradePrice", this.tThreeUpgradePrice.toString());
    localStorage.setItem("tFourUpgradePrice", this.tFourUpgradePrice.toString());
    
    localStorage.setItem("tOneRate", this.tOneRate.toString());
    localStorage.setItem("tTwoRate", this.tTwoRate.toString());
    localStorage.setItem("tThreeRate", this.tThreeRate.toString());
    localStorage.setItem("tFourRate", this.tFourRate.toString());

    localStorage.setItem("tTwoAvailable", this.tTwoAvailable.toString());
    localStorage.setItem("tThreeAvailable", this.tThreeAvailable.toString());
    localStorage.setItem("tFourAvailable", this.tFourAvailable.toString());
  }

  load(): void{
    this.credits = parseInt(localStorage.getItem("credits"));

    this.tOne = parseInt(localStorage.getItem("tOne"));
    this.tTwo = parseInt(localStorage.getItem("tTwo"));
    this.tThree = parseInt(localStorage.getItem("tThree"));
    this.tFour = parseInt(localStorage.getItem("tFour"));

    this.tOnePrice = parseInt(localStorage.getItem("tOnePrice"));
    this.tTwoPrice = parseInt(localStorage.getItem("tTwoPrice"));
    this.tThreePrice = parseInt(localStorage.getItem("tThreePrice"));
    this.tFourPrice = parseInt(localStorage.getItem("tFourPrice"));
    
    this.tOneRate = parseInt(localStorage.getItem("tOneRate"));
    this.tTwoRate = parseInt(localStorage.getItem("tTwoRate"));
    this.tThreeRate = parseInt(localStorage.getItem("tThreeRate"));
    this.tFourRate = parseInt(localStorage.getItem("tFourRate"));
  
    this.tOneUpgradePrice = parseInt(localStorage.getItem("tOneUpgradePrice"));
    this.tTwoUpgradePrice = parseInt(localStorage.getItem("tTwoUpgradePrice"));
    this.tThreeUpgradePrice = parseInt(localStorage.getItem("tThreeUpgradePrice"));
    this.tFourUpgradePrice = parseInt(localStorage.getItem("tFourUpgradePrice"));
  
    this.tTwoAvailable = JSON.parse(localStorage.getItem("tTwoAvailable"));
    this.tThreeAvailable = JSON.parse(localStorage.getItem("tThreeAvailable"));
    this.tFourAvailable = JSON.parse(localStorage.getItem("tFourAvailable"));
    this.calculateCreditsPerSecond()
  }

}
