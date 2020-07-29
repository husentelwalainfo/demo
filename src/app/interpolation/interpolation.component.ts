import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public firstName;
  public digit;
  constructor() { }
  public imagepath;
  public isDisabled;
  public styleVariable;
  public isRedText;
  public isBoldText;
  ngOnInit(): void {
    this.digit = 22.537;
    this.isDisabled = true;
    this.imagepath = "../../assets/img.png";
    this.styleVariable = "redtext";
    this.isRedText = true;
    this.isBoldText = true;
  }
  inputChange() {
    console.log("input value change");
  }
}
