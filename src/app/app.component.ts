import { Component } from '@angular/core';
import { CreditService } from './credit.service';
import { RateService } from './rate.service';
import { ProducerComponent } from './producer/producer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private creditService: CreditService,
    private producerComponent: ProducerComponent
  ){
  }

  // ngOnInit() {
  //   setInterval(()=>{this.producerComponent.produce()},1000);
  // }

  title = 'idleCity';
  credits = this.creditService.getCredits();
  creditsPerSecond = this.producerComponent.getCreditsPerSecond();

}
