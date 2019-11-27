import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/Entities/Interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(inputs: Course[], key: string): Course[] {
    key = key ? key : '';
    const filteredInputs = inputs.filter(input => {
      const inputLowerCase = input.title.toLowerCase();
      return inputLowerCase.includes(key.toLowerCase());
    });

    return filteredInputs;
  }

}
