import {ValidationErrors, AbstractControl, ValidatorFn} from "@angular/forms";


//! implementing Validator interface is totally optional for custom validators.
//! by using interface Angular can check if our custom validator has required functions.

//! we can use custom validator to check either a single field or an entire form.
//! if you pass FormGroup to validate, that means you want to validate on a form level.
//! if you pass FormControl to validate, that means you want to validate on a field level.

//! if you are not sure what this MatchPassword class will get while validating,
//! you can pass AbstractControl instead.

//! class didn't work, will implement using functional approach.

export function matchPassword(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get("password");
    const passwordConfirmation = control.get("passwordConfirmation");

    if (password?.value === passwordConfirmation?.value) {
      return null;
    }

    return {
      passwordsNotMatched: true
    };
  }
}

// @Injectable({providedIn: "root"})
// export class MatchPassword implements Validator {
//   validate(control: AbstractControl): ValidationErrors | null {
//     const password = control.get("password");
//     const passwordConfirmation = control.get("passwordConfirmation");
//     console.log(password);

//     if (password === passwordConfirmation) {
//       return null;
//     }

//     return {
//       passwordsNotMatched: true
//     };
//   }
// }
