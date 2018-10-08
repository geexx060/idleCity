import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idleCity';
  


  constructor(){
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
