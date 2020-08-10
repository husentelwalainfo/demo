import { Component, OnInit } from '@angular/core';
import { trigger,  state,  style,  animate,  transition, } from '@angular/animations';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  animations:[
  trigger('fadeeffect', [
  state('void', style({ left:"-100%" })),
        transition('void <=> *', [
          animate(500)
        ])
      ])]

  // Method
  // transition('void => *', [
  //   style({ opacity:0 }),
  //   animate(2000)
  // ]),
  // transition('* => void', [
  //   style({ opacity:1 }),
  // ])

  // Method
  // transition('void => *', [
  //   style({ opacity:0 }),
  //   animate(500)
  // ]),
  // transition('* => void', [
  //   animate(500, style({ opacity:0 }))
  // ])

  // Method
  // state('void',style({opacity:0})),
  // transition('void => *', [
  //   animate(500)
  // ]),
  // transition('* => void', [
  //   animate(500)
  // ])

  // Method
  // state('void',style({opacity:0})),
  // transition('void => *, * => void', [
  //   animate(500)
  // ]),

  // Method
  // state('void',style({opacity:0})),
  // transition('void <=> *', [
  //   animate(500)
  // ]),

  // Method
  // state('void',style({height:"0"})),
  // transition('void => *, * => void', [
  //   animate(500)
  // ]),

  // Method
  // state('void',style({left:"-100%"})),
  // transition('void => *, * => void', [
  //   animate(500)
  // ]),


})
export class ContactUsComponent implements OnInit {
  public showcontact;
  constructor() { }

  ngOnInit(): void {
  }

}
