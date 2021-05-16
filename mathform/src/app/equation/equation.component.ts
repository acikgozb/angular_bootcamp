import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;

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
    this.mathForm.statusChanges
      .pipe(
        delay(100),
        filter((value) => value === 'VALID'), // ! new operator. Self-explanatory.
        scan(
          // ! scan is similar to reduce, but it runs every time observer emits a value. Useful for encapsulating and managing logic.
          (acc, value) => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime,
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
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
