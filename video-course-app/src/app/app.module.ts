import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

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
import { FilterPipe } from './shared/pipes/filter/filter.pipe';
import { OrderbyPipe } from './shared/pipes/orderby/orderby.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmModalComponent } from './shared/UI/confirm-modal/confirm-modal.component';


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
    FilterPipe,
    OrderbyPipe,
    ConfirmModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
