import { Directive, Renderer2, ElementRef, Input, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Course } from 'src/Entities/Interfaces';
import { stringify } from 'querystring';


@Directive({
  selector: '[appFreshCourseDirective]'
})
export class FreshCourseDirective implements OnChanges {

  @Input() course: Course;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges() {
    const courseDate: Date = new Date(this.course.date);
    this.setStyleFreshCourse(courseDate);
  }

  private getBorderStyle(creationDate: Date): string {
    const now: Date = new Date();
    const limitFreshDate: Date = new Date();
    limitFreshDate.setDate(now.getDate() - 14);

    if (creationDate < now && creationDate >= limitFreshDate) {
      return 'rgb(60,179,113)';
    } else if (creationDate > now) {
      return '#33CEFF';
    } else {
      return '#fff';
    }
  }

  private setStyleFreshCourse(creationDate: Date) {
    const borderColor = this.getBorderStyle(creationDate);
    this.renderer.setStyle(this.el.nativeElement, 'border', `3px solid ${borderColor}`);
  }

}
