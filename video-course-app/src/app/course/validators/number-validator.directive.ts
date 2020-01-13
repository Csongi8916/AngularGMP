import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[vc-number-validator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberValidatorDirective, multi: true }]
})
export class NumberValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    if (control.value) {
      const result = Number(control.value);
      console.log(result);
      return result && result !== Number.NaN ? null : { number: 'This value is not a number!' };
    }

    return null;
  }
}
