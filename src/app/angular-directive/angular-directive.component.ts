import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directive',
  templateUrl: './angular-directive.component.html',
  styleUrls: ['./angular-directive.component.css']
})
export class AngularDirectiveComponent implements OnInit {

  isVisible= true;
  constructor() { }
  public currentDay;
  public selectedTab=2;
  //public days = ['Sunday','Mon','Tue','Wed','Thur','Fri','Sat'];
  // public days = [
  //   { dayNo:0, dayName:'Sunday'},
  //   { dayNo:1, dayName:'Mon'},
  //   { dayNo:2, dayName:'Tue'},
  //   { dayNo:3, dayName:'Wed'},
  //   { dayNo:4, dayName:'Thur'},
  //   { dayNo:5, dayName:'Fri'},
  //   { dayNo:6, dayName:'Sat'},
  // ];
  ngOnInit(): void {
    //this.currentDay = new Date().getDay(); 
  }


}
