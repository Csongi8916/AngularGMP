import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  private hourIndex: number = 0;
  private hourTextIndex: number = 1;
  private minuteIndex: number = 2;
  private minuteTextIndex: number = 3;
  private durationSeparator: string

  transform(duration: string): string {
    const durationParts: string[] = duration.split(' ');
    if (durationParts[this.hourIndex] === '0') {
      return [durationParts[this.minuteIndex], durationParts[3]].join('');
    }

    const hourDurationPart: string = [durationParts[this.hourIndex], durationParts[this.hourTextIndex]].join('');
    const minuteDurationPart: string = [durationParts[this.minuteIndex], durationParts[this.minuteTextIndex]].join('');
    const formattedDuration: string = [hourDurationPart, minuteDurationPart].join(' ');
    return formattedDuration;
  }

}
