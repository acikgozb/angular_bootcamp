import { AbstractControl } from '@angular/forms';

export class MathValidators {
  // ! declaring methods with 'static' keyword allows us to skip
  // ! initializing a new class.
  // ! instead, we can use these methods like MathValidators.addition().
  // ! The downside is static functions don't have access to class properties.

  static addition(answer: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      if (
        form.value[sourceOne] + form.value[sourceTwo] ===
        parseInt(form.value[answer])
      ) {
        return null;
      }

      return { addition: true };
    };
  }
}
