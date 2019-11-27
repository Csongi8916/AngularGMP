import { Injectable } from '@angular/core';
import { Course } from 'src/Entities/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[];

  constructor() {
    this.init();
  }

  private init() {
    this.courses =
      [
        {
          id: 1,
          title: "Video Course 2. Name tag",
          duration: 88,
          creationDate: new Date("2019.11.19"),
          topRated: true,
          description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        },
        {
          id: 2,
          title: "Video Course 3. Name tag",
          duration: 210,
          creationDate: new Date("2019.08.01"),
          topRated: false,
          description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        },
        {
          id: 3,
          title: "Video Course 1. Name tag",
          duration: 45,
          creationDate: new Date("2019.12.20"),
          topRated: false,
          description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        },
      ];
  }

  getCourses(): Course[] {
    return this.courses;
  }

  getCourse(id: number): Course {
    return this.courses.find(course => course.id === id);
  }

  createCourse(course: Course): void {
    let max: number = 0;
    this.courses.forEach(course => {
      if (course.id > max) {
        max = course.id;
      }
    });

    this.courses.push({
      id: ++max,
      title: course.title,
      duration: course.duration,
      creationDate: course.creationDate,
      topRated: course.topRated,
      description: course.description,
    });
  }

  updateCourse(course: Course): void {
    let originalCourse: Course = this.courses.find(course => course.id === course.id);
    originalCourse.title = course.title;
    originalCourse.duration = course.duration;
    originalCourse.creationDate = course.creationDate;
    originalCourse.topRated = course.topRated;
    originalCourse.description = course.description;
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
