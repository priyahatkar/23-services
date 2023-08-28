import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { Ipassenger } from '../../model/pass';

@Component({
  selector: 'app-pass-dashboard',
  templateUrl: './pass-dashboard.component.html',
  styleUrls: ['./pass-dashboard.component.scss']
})
export class PassDashboardComponent implements OnInit {
  passServiceInstance!: PassengerService;
  passArray : Array<Ipassenger> =[]
  constructor() { }

  ngOnInit(): void {
    this.passServiceInstance = new PassengerService();
    this.passArray = this.passServiceInstance.getPassData();
    console.log(this.passArray);
    
  }

}
