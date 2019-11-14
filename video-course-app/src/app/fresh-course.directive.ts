import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Course } from 'src/Entities/Interfaces';


@Directive({
  selector: '[appFreshCourseDirective]'
})
export class FreshCourseDirective {

  @Input() course: Course;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges() {
    const courseDate: Date = new Date(this.course.date);
    this.setStyleFreshCourse(courseDate);
  }

  private calculateLimitFreshDate(now: Date) {
    const limitFreshDate: Date = new Date();
    limitFreshDate.setDate(now.getDate() - 14);
    return limitFreshDate;
  }

  private setStyleFreshCourse(date: Date) {
    const now: Date = new Date();
    const limitFreshDate: Date = this.calculateLimitFreshDate(now);

    if (date < now && date >= limitFreshDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '5px solid rgb(60,179,113)');
    }
    else if (date > now) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '5px solid #33CEFF');
    }
  }

}
