import {FormControl} from "@angular/forms";
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label = "";
  @Input() control!: FormControl;
  @Input() type = "text";

  constructor() {}

  ngOnInit(): void {
  }

  showErrors(): boolean {
    const {dirty, touched, errors} = this.control;
    return !!dirty && !!touched && !!errors;
  }

}
