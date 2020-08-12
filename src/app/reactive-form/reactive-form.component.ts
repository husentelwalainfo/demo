import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }
  loginForm = this.formbuilder.group({
    username:[''],
    password:[''],
  })
  ngOnInit(): void {
  }

}
