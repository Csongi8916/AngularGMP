import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseBreadcrumbComponent } from './course-breadcrumb/course-breadcrumb.component';
import { CoursePageComponent } from '../course/course-page/course-page.component';
import { CourseComponent } from '../course/course-page/course/course.component';

import { FilterPipe } from './pipes/filter/filter.pipe';
import { OrderbyPipe } from './pipes/orderby/orderby.pipe';
import { FreshCourseDirective } from './directives/fresh-course.directive';
import { DurationPipe } from '../duration.pipe';
import { CourseAddPageComponent } from './pages/course-add-page/course-add-page.component';
import { CourseEditPageComponent } from './pages/course-edit-page/course-edit-page.component';
import { RouterModule } from '@angular/router';
import { CourseEditorComponent } from './course-editor/course-editor.component';


@NgModule({
  declarations: [
    CourseBreadcrumbComponent,
    CoursePageComponent,
    CourseComponent,
    CourseEditorComponent,
    FilterPipe,
    OrderbyPipe,
    FreshCourseDirective,
    DurationPipe,
    CourseAddPageComponent,
    CourseEditPageComponent,
  ],
  exports: [
    CourseBreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
  ],
})
export class CourseModule { }
