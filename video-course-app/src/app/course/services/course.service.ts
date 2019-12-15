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
    let res = this.http.get<Course[]>('http://localhost:3004/courses');
    return res;
  }

  getCourse(id: number): Observable<Course> {
    // return this.courses.find(course => course.id === id);
    let res = this.http.get<Course>(`http://localhost:3004/courses/${id}`);
    return res;
  }

  createCourse(course: Course): void {
    this.http.post<Course>(`http://localhost:3004/courses`, course, this.httpOptions);
  }

  updateCourse(course: Course): void {
    this.http.put<Course>(`http://localhost:3004/courses`, course, this.httpOptions);
  }

  removeCourse(id: number): void {
    this.http.delete(`http://localhost:3004/courses/${id}`);
  }

}
