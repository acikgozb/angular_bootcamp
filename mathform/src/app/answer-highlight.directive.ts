import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private controlName: NgControl) {
    // ! NgControl is used to access the formControlName of target element.
    // ! formControlName is a glue between FormControl and target element.
    // ! to access the original FormControl -> this.controlName.control.
    // ! to access the FormGroup -> this.controlName.control?.parent.
  }

  ngOnInit() {
    // ! valueChanges is an observable and emits values when form changes.
    this.controlName.control?.parent?.valueChanges
      .pipe(map(({ a, b, answer }) => Math.abs((a + b - answer) / (a + b))))
      .subscribe((value) => {
        if (value < 0.2) {
          this.elementRef.nativeElement.classList.add('close');
        } else {
          this.elementRef.nativeElement.classList.remove('close');
        }
      });
  }
}
