import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  text1: string　= "";
  text2: string = "";
  result: string = "Let's add two numbers";

  constructor() { }

  ngOnInit(): void {
  }

  addAndShow(): void {
    let forResult: string = "Please input validate value.";
    let int1: number;
    let int2: number;
    int1 = Number(this.text1);
    int2 = Number(this.text2);
    
    if (!Number.isNaN(int1) && !Number.isNaN(int2)) {
      forResult = `${int1} + ${int2} = ${int1 + int2}`;
    }
    this.result = forResult;
  }

}
