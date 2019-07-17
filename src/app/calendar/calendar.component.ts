import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  myStartDate: Date = new Date;
  myFinalDate: Date = new Date;
  totalDays: number = 0;

  public onDate(event): void {
    this.myFinalDate = event;
    this.countDays();
  }

 countDays():number{
   this.totalDays = (this.myFinalDate.getTime()-this.myStartDate.getTime()/(1000 * 60 * 60 * 24))
    return this.totalDays
  }

  logit(){
    console.log("objeto" + this.myStartDate.getTime())
  }
  constructor() { }

  ngOnInit() {
  }

}
