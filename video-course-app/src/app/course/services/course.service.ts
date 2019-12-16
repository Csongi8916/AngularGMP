import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/Entities/Interfaces';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // private courses: Course[];
  private httpOptions: object;
  private breadcrumbStack: object[];

  constructor(private http: HttpClient) {
    // this.courses = [];
    this.breadcrumbStack = [];
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };  }

  // Will be removed, when I will use real api
  /*getNewId(): number {
    let max = 0;
    this.courses.forEach(c => {
      if (c.id > max) {
        max = c.id;
      }
    });

    return ++max;
  }*/

  pushBreadcrumb(name: string, url: string): void {
    this.breadcrumbStack.push({ breadcurmbName: name, breadcurmbUrl: url });
  }

  refreshBreadcrumb() {
    this.breadcrumbStack.pop();
  }

  getBreadcrumbSize() {
    return this.breadcrumbStack.length;
  }

  getBreadcrumb(sender: string): object[] {
    if (sender === 'Courses') {
      return this.breadcrumbStack;
    } else if (sender === 'Course') {
      return this.breadcrumbStack;
    } else if (sender === 'New Course') {
      return this.breadcrumbStack;
    }
  }

  getCourses(): Observable<Course[]> {
    let result = this.http.get<Course[]>('http://localhost:3004/courses');
    return result;
  }

  getCourse(id: number): Observable<Course> {
    let result = this.http.get<Course>(`http://localhost:3004/courses/${id}`);
    return result;
  }

  createCourse(course: Course): Observable<Course> {
    let result = this.http.post<Course>(`http://localhost:3004/courses`, course, this.httpOptions);
    return result;
  }

  updateCourse(course: Course): Observable<Course> {
    let result = this.http.put<Course>(`http://localhost:3004/courses/${course.id}`, course, this.httpOptions);
    return result;
  }

  removeCourse(id: number): Observable<Course> {
    let result = this.http.delete<Course>(`http://localhost:3004/courses/${id}`, this.httpOptions);
    return result;
  }

}
