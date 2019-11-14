import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { CourseBreadcrumbComponent } from './course-breadcrumb/course-breadcrumb.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseComponent } from './course-page/course/course.component';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FreshCourseDirective } from './fresh-course.directive';
import { DurationPipe } from './duration.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CourseBreadcrumbComponent,
    CoursePageComponent,
    CourseComponent,
    FreshCourseDirective,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
