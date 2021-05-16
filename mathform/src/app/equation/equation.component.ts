import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup(
    {
      a: new FormControl(this.getRandomNumber()),
      b: new FormControl(this.getRandomNumber()),
      answer: new FormControl(''),
    },
    [
      MathValidators.addition('answer', 'a', 'b'),
      // (form: AbstractControl) => {
      //   //custom validator function, gets the formGroup as first argument.
      //   // ! whatever object we return from here will be put under formGroup.errors property.
      //   const { a, b, answer } = form.value;
      //   if (a + b === parseInt(answer)) {
      //     return null;
      //   }
      //   return { addition: true };
      // },
    ]
  );

  constructor() {}

  ngOnInit(): void {
    this.mathForm.statusChanges.subscribe((value) => {
      if (value === 'INVALID') {
        return;
      }

      // this.mathForm.controls.a.setValue(this.getRandomNumber());
      // this.mathForm.controls.b.setValue(this.getRandomNumber());
      // this.mathForm.controls.answer.setValue('');
      // ! do this if you want to set all values inside a form
      this.mathForm.setValue({
        a: this.getRandomNumber(),
        b: this.getRandomNumber(),
        answer: '',
      });

      // ! do this if you want to update a form partially
      // this.mathForm.patchValue({
      //   a: ''
      // })
    });
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }
}
