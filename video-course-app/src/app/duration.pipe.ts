import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): string {
    if (duration < 60) {
      return `${duration}min`;
    }

    const hour = Math.floor(duration / 60);
    const minute = duration % 60;
    return `${hour}h ${minute}min`;
  }

}
