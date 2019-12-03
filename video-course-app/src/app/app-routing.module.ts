import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/login/login.component';
import { CoursePageComponent } from './course/course-page/course-page.component';
import { CourseAddPageComponent } from './course/course-add-page/course-add-page.component';


const routes: Routes = [
  { path: '', component: CoursePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-course', component: CourseAddPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
