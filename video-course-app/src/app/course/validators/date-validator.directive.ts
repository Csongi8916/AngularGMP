import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[vc-date-validator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true }]
})
export class DateValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    if (control.value) {
      const result = new RegExp('^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$').test(control.value);
      return result ? null : { dateFormat: 'Wrong date format. (dd/mm/yyyy)' };
    }

    return null;
  }
}
