import { Pipe, PipeTransform } from '@angular/core';
import { Filterable } from 'src/Entities/Interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(inputs: Filterable[], key: string): Filterable[] {
    key = key ? key : '';
    const filteredInputs = inputs.filter(input => {
      const inputLowerCase = input.filter.toLowerCase();
      return inputLowerCase.includes(key.toLowerCase());
    });

    return filteredInputs;
  }

}
