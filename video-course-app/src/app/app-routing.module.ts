import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { CoursePageComponent } from './course/course-page/course-page.component';


const routes: Routes = [
  { path: '', component: CoursePageComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [AppComponent, LoginComponent];
