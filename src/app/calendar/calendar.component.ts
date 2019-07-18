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
  myStartDay: number = 0;
  myFinalDay: number = 0;
  daysToShow: Array<number> = []
  dateArr = []

 countDays(){
    var diff = Math.abs(this.myFinalDate.getTime()-this.myStartDate.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    this.totalDays = diffDays+1
    this.myStartDay = this.myStartDate.getUTCDate();
    this.myFinalDay = this.myFinalDate.getUTCDate();
    this.createAgenda(this.myStartDate,this.myFinalDate);
    return this.totalDays  
  }

  createAgenda(start,end){
    // date array
  var getDateArray = function(start, end) {
  var
    arr = new Array(),
    options:any = {month:'short',day:'numeric'},
    dt = new Date(start);
    end.setDate(end.getDate() + 1);
  while (dt < end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
}
    this.dateArr = getDateArray(start, end);
    console.log('these are the days to be created'+ this.dateArr);
    
  }
  
  constructor() { }

  ngOnInit() {
  }
  
}
