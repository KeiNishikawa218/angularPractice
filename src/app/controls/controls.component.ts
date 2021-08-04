import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, CheckboxControlValueAccessor } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  coffeeForm: FormGroup;
  hotcoldsel = ["Hot", "Cold"];
  addssel = ["Milk", "Sugar"];
  nutsel = ["peanut", "almond", "walnut"]

  constructor(private fb: FormBuilder) {
    this.coffeeForm = this.fb.group({
      name: "blend",
      taste: "mild with good balance",
      hotcold: this.hotcoldsel[0],
      adds: this.fb.array([]),
      nut: this.nutsel[0]
    })
  }

  ngOnInit(): void {
  }

  // Reference: https://github.com/angular/components/issues/1142
  onCheckChanged(item: string, e: Event) {
    const checkbox = e.target as HTMLInputElement;

    let formArray = <FormArray>this.coffeeForm.controls.adds;
    if (checkbox.checked) {
      formArray.push(new FormControl(item));
    } else {
      let index = formArray.controls.findIndex(elm => elm.value == item)
      formArray.removeAt(index);
    }
  }
}

