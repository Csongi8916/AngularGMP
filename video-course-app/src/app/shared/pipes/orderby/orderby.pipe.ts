import { Pipe, PipeTransform } from '@angular/core';
import { Sortable } from 'src/Entities/Interfaces';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(inputs: Sortable[]): Sortable[] {
    const orderedInputs =  inputs.sort((a: Sortable, b: Sortable) => {
      return b.sortable.getTime() - a.sortable.getTime();
    });

    debugger;

    return orderedInputs;
  }

}
