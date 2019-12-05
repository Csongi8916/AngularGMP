import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from 'src/Entities/Interfaces';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.scss']
})
export class CourseAddPageComponent implements OnInit, OnChanges {

  mode: string;
  course: Course;
  durationInput: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.course = {
      id: 0,
      title: '',
      duration: 1,
      creationDate: new Date(),
      description: '',
      topRated: false,
    };
    // this.mode = history.state.mode;
    this.mode = this.router.url; // TODO WORK HERE!!!!
  }

  ngOnChanges() {
    console.log(this.course.duration);
  }

  onChange(value) {
    if (!value) {
      this.course.duration = 0;
    }
  }

  onSaveCourse() {
    console.log('Course saved!');
  }

  onCancelCourse() {
    console.log('Course canceled!');
  }

}
