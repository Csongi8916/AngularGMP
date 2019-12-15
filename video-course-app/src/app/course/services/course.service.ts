import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/Entities/Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[];
  private breadcrumbStack: object[];

  constructor(private http: HttpClient) {
    this.courses = [];
    this.breadcrumbStack = [];
  }

  // Will be removed, when I will use real api
  getNewId(): number {
    let max = 0;
    this.courses.forEach(c => {
      if (c.id > max) {
        max = c.id;
      }
    });

    return ++max;
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

   getCourses(): Observable<Course[]> {
    let res = this.http.get<Course[]>('http://localhost:3004/courses');
    return res;
  }

  getCourse(id: number): Course {
    return this.courses.find(course => course.id === id);
  }

  createCourse(course: Course): void {
    let max = 0;
    this.courses.forEach(c => {
      if (c.id > max) {
        max = c.id;
      }
    });

    this.courses.push(course);
  }

  updateCourse(course: Course): void {
    let originalCourse: Course = this.courses.find(c => c.id === course.id);
    originalCourse.name = course.name;
    originalCourse.description = course.description;
    originalCourse.date = new Date(course.date);
    originalCourse.length = course.length;
  }

  removeCourse(id: number): Course[] {
    const newArray = this.courses.filter(c => {
      if (c.id !== id) {
        return c;
      }
    });

    this.courses = newArray;
    return this.courses;
  }

}
