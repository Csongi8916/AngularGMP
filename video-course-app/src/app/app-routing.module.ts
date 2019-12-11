import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/login/login.component';
import { CoursePageComponent } from './course/course-page/course-page.component';
import { CourseAddPageComponent } from './course/course-add-page/course-add-page.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './core/auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursePageComponent, canActivate:[AuthGuard], data: { breadcrumb: 'Courses' } },
  { path: 'courses/:id', component: CourseAddPageComponent, canActivate:[AuthGuard], data: { breadcrumb: 'Course' } },
  { path: 'courses/new', component: CourseAddPageComponent, canActivate:[AuthGuard], data: { breadcrumb: 'New Course' } },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
