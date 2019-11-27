import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './core/auth/login/login.component';
import { CourseModule } from './course/course.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginComponent,
  ],
  imports: [
    CourseModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
