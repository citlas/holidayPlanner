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
   //this.totalDays = Math.round(Math.abs((this.myFinalDate.valueOf()-this.myStartDate.valueOf())))
   this.totalDays = this.myFinalDate.valueOf()-this.myStartDate.valueOf()
    
  
    return Math.round(Math.abs((this.myFinalDate.valueOf()-this.myStartDate.valueOf())))
  }

  logit(){
    console.log("objeto" + this.myStartDate.getTime())
    console.log("dif days" + this.countDays())
    console.log((this.myFinalDate.getTime()-this.myStartDate.getTime()));
    
  }
  constructor() { }

  ngOnInit() {
  }

}
