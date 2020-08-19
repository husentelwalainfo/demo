import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
})
export class Test implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  number = 0;
  increment() {
      this.number++;
      this.number++;
  }
  
  decrement() {
    //this.number--;
    }
}
