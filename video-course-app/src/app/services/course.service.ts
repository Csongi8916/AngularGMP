import { Injectable } from '@angular/core';
import { Course } from 'src/Entities/Interfaces';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses = new BehaviorSubject<Course[]>([]);

  constructor() {
    this.init();
  }

  private init() {
    this.courses.next(
      [
        {
          id: 1,
          title: "Video Course 2. Name tag",
          duration: 88,
          creationDate: new Date("2019.11.19"),
          topRated: true,
          description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
          filter: "Video Course 2. Name tag",
          sortable: new Date("2019.11.19")
        },
        {
          id: 2,
          title: "Video Course 3. Name tag",
          duration: 210,
          creationDate: new Date("2019.08.01"),
          topRated: false,
          description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
          filter: "Video Course 3. Name tag",
          sortable: new Date("2019.08.01")
        },
        {
          id: 3,
          title: "Video Course 1. Name tag",
          duration: 45,
          creationDate: new Date("2019.12.20"),
          topRated: false,
          description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
          filter: "Video Course 1. Name tag",
          sortable: new Date("2019.12.20")
        },
      ]
    )
  }

  getCourses(): Observable<Course[]> {
    return this.courses;
  }

  getCourse(id: number): Course {
    const array = this.courses.getValue();
    return array.find(course => course.id === id);
  }

  createCourse(course: Course): void {
    let max: number = 0;
    const array = this.courses.getValue();
    array.forEach(course => {
      if (course.id > max) {
        max = course.id;
      }
    });

    array.push({
      id: ++max,
      title: course.title,
      duration: course.duration,
      creationDate: course.creationDate,
      topRated: course.topRated,
      description: course.description,
      filter: "",
      sortable: null
    });

    this.courses.next(array);
  }

  updateCourse(course: Course): void {
    const array = this.courses.getValue();
    let originalCourse: Course = array.find(course => course.id === course.id);
    originalCourse.title = course.title;
    originalCourse.duration = course.duration;
    originalCourse.creationDate = course.creationDate;
    originalCourse.topRated = course.topRated;
    originalCourse.description = course.description;
    this.courses.next(array);
  }

  cast = this.courses.asObservable();

  updateDictionary(newCourses): void {
    this.courses.next(newCourses);
  }

  removeCourse(id: number): void {
    const array = this.courses.getValue();

    /*for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array.splice(i, 1);
      }
    }*/

    /*const newArray: Course[] = array.map(c => {
      if (c.id !== id) {
        return c;
      }
    });*/

    let i = 0;
    const newArray: Course[] = [];
    array.forEach(c => {
      if (c.id !== id) {
        newArray[i++] = c;
      }
    });

    this.courses.next(newArray);
  }

}
