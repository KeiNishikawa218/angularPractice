import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  coffeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.coffeeForm = this.fb.group({
      name: "blend",
      taste: "mild with good balance"
    })
  }

  ngOnInit(): void {
  }

}
