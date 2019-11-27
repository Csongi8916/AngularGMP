import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseBreadcrumbComponent } from '../course/course-breadcrumb/course-breadcrumb.component';
import { CoursePageComponent } from '../course/course-page/course-page.component';
import { CourseComponent } from '../course/course-page/course/course.component';

import { FilterPipe } from '../shared/pipes/filter/filter.pipe';
import { OrderbyPipe } from '../shared/pipes/orderby/orderby.pipe';
import { FreshCourseDirective } from '../fresh-course.directive';
import { DurationPipe } from '../duration.pipe';


@NgModule({
  declarations: [
    CourseBreadcrumbComponent,
    CoursePageComponent,
    CourseComponent,
    FilterPipe,
    OrderbyPipe,
    FreshCourseDirective,
    DurationPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
  ],
})
export class CourseModule { }
