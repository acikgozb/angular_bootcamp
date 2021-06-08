import {UniqueUsername} from "./../validators/unique-username";
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {matchPassword} from "./../validators/match-password";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [
      this.uniqueUsername.validate
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  }, [matchPassword()]);

  constructor(
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }
    //! IMPORTANT!
    //! An Observable won't run unless it is subscribed!!
    //! In other words, this http request won't fire if we don't subscribe to it.
    this.authService.signUp(this.authForm.value)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl("/inbox");
        },
        error: (err) => {
          //! it is possible to force an error into FormGroup imperatively by calling formGroup.setErrors()
          if (err.status === 0) {
            this.authForm.setErrors({
              noConnection: true
            })
          } else {
            this.authForm.setErrors({
              unknownError: true
            })
          }

        }
      });

  }
}
