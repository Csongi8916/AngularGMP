import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { DatePipe } from '@angular/common';


@Directive({
  selector: '[appFreshCourseDirective]'
})
export class FreshCourseDirectiveDirective {

  @Input() courseDate: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    const date: Date = new Date(this.courseDate);
    this.setStyleFreshCourse(date);
  }

  private setStyleFreshCourse(date: Date) {
    const now: Date = new Date();
    const limitFreshDate: Date = new Date();
    limitFreshDate.setDate(now.getDate() - 14);

    if (date < now && date >= limitFreshDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '5px solid rgb(60,179,113)');
    }
    else if (date > now) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '5px solid #33CEFF');
    }
  }

}
