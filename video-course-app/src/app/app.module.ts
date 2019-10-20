import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { CourseBreadcrumbComponent } from './course-breadcrumb/course-breadcrumb.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseComponent } from './courses-page/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CourseBreadcrumbComponent,
    CoursesPageComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
