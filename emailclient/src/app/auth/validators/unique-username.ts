import {catchError, map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AbstractControl, AsyncValidator} from "@angular/forms";
import {of} from "rxjs";
import {AuthService} from "../auth.service";


@Injectable({providedIn: "root"})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  //! to access "this" inside the function, always use an arrow function.
  validate = (control: AbstractControl) => {
    const {value} = control;

    //! if endpoint sends back an error, error object just skips some operators in pipe.
    //! map is one of them, so further checking if value is available or not in map is not necessary.

    //! to handle errors which are emitted from Observables, use "catchError" operator.
    //! "of" operator is a shortcut of creating an Observable, emitting what is passed as an argument and then "do nothing else".
    return this.authService.usernameAvailable(value)
      .pipe(
        map(value => null),
        catchError((err) => {
          if (err.error.username) {
            return of({nonUniqueUsername: true});
          }

          return of({noConnection: true});
        })
      );
  }
}
