import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/Entities/Interfaces';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(inputs: Course[]): Course[] {
    const orderedInputs = inputs.sort((a: Course, b: Course) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return orderedInputs;
  }

}
