import { Directive, Renderer2, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appFreshCourseDirective]'
})
export class FreshCourseDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const date: Date = new Date();
    console.log(this.freshCourseColor);
    this.renderer.setStyle(this.el.nativeElement, 'border', '5px solid green');
  }

  @Input() freshCourseColor: string;


}
