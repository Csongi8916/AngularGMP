import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/Entities/Interfaces';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private httpOptions: object;
  private breadcrumbStack: object[];
  private start: number;
  private count: number; 

  constructor(private http: HttpClient) {
    this.breadcrumbStack = [];
    this.start = 0;
    this.count = 3;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  }

  getStart(): number {
    return this.start;
  }

  getCount(): number {
    return this.count;
  }

  setStart(start: number): void {
    this.start = start;
  }

  setCount(count: number): void {
    this.count = count;
  }

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

  searchCourses(textFragment: string): Observable<Course[]> {
    // const result = this.http.get<Course[]>(`http://localhost:3004/courses?q=${textFragment}`);
    // const result = this.http.get<Course[]>(`http://localhost:3004/courses?name=${textFragment}`);
    const result = this.http.get<Course[]>(`http://localhost:3004/courses`);
    return result;
  }

  getCourses(isLoadMore: boolean = false): Observable<Course[]> {
    let result;
    if (isLoadMore || this.start === 0) {
      result = this.http.get<Course[]>(`http://localhost:3004/courses?_sort=date&_order=asc&start=${this.start}&count=${this.count}`);
      this.start += 3;
    } else {
      result = this.http.get<Course[]>(`http://localhost:3004/courses?_sort=date&_order=asc&start=0&count=${this.start}`);
    }
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
