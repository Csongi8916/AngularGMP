import { Component, OnInit, OnChanges } from '@angular/core';
import { Course } from 'src/Entities/Interfaces';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.scss']
})
export class CourseAddPageComponent implements OnInit, OnChanges {

  course: Course;
  durationInput: number;

  constructor() { }

  ngOnInit() {
    this.course = {
      id: 0,
      title: '',
      duration: 1,
      creationDate: new Date(),
      description: '',
      topRated: false,
    };
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
